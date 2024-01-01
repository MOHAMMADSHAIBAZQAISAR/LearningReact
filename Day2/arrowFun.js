//Day2

const obj = {
    FirstName: "SHaibaz",
    printName: () => {
        //This will point to 
        console.log(this);
    },
    printName2: function ()  { 
        console.log(this.FirstName);
    }
}

obj.printName();
obj.printName2();

