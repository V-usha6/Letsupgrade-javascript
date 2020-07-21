class User 
{
    constructor(name,age,email)
    {
        this.name=name;
        this.age=age;
        this.email=email;
        this.luCoins=3;
        this.Courses=[];
    }
    static greet(){
        console.log("Hello There");
    }    
    login()
    {
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout()
    {
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins()
    {
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    removecoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    } 
    addCourse(user,Course)
    {
        user.Courses.push(Course);
        console.log(user);
    }
    deleteCourse(courses)
    {
        courses = courses.filter(c=>
            {
                return c
            })
    }
}

class Moderator extends User{
    constructor(name,age,email,addCoins,removeCoins)
    {
        super(name,age,email);
        this.addCoins=addCoins;
        this.removCoins=removeCoins;
    }
}


class Admin extends Moderator
{
   constructor(name,age,email,addCoins,removeCoins,addCourse,deleteCourse)
   {
        super(name,age,email,addCoins,removeCoins);
        this.addCourse=addCourse;
        this.deleteCourse=deleteCourse;
    }  
}

let user1 = new User('balu',23,'balu20@gmail.com');
let user2 = new User('shilpa',22,'shilpa23@gmail.com');
let mod1 = new Moderator('Berlin',24,'b@gmail.com'); 
let admin = new Admin('Rio',25,'r@gmail.com');
let users = [user1,user2,mod1,admin];


users.forEach(element => {
    console.log(element);
});

User.greet();
user1.login();
//user2.logout();
user2.login();
//user2.addCoins();
user2.removecoins();
//admin.addCourse(user1, 'js');
//admin.addCourse(user2, 'c');
//admin.deleteCourse(user1);

//user1.login().addcoins().removecoins().addCourse().removeCourse().logout();
//user2.login().logout().addcoins().removecoins().addcourse().deletecourse().logout();



