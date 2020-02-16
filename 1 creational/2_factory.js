class SimpleMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandartMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMemberShip,
        standart: StandartMemberShip,
        premium: PremiumMemberShip
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);
        member.type = type;
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        };
        return member;
    }
}

const factory = new MemberFactory();

const members = [
    factory.create('Bogdan', 'simple'),
    factory.create('Vladislav', 'premium'),
    factory.create('Sasha', 'standard'),
    factory.create('Ivan', 'premium'),
    factory.create('Peter')
]

members.forEach(m => {
    m.define();
});