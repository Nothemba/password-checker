describe("Password Validity", function(){
 it("should be greater than 8 characters", function(){
     expect(characters("rtyhna979")).toBe(true);
 })
 it("should check if password is longer than 8 characters", () => {
    expect(() => {characters("rtyuii")}).toThrow(new Error("The password must be greater than 8 characters"));
    });

 it("should have at least one uppercase", function(){
     expect(uppercase("LguiopL8o")).toBe(true);
 })

 it("should have at least one uppercase", () => {
    expect(() => {uppercase("rtyuii")}).toThrow(new Error("The password must contain at least 1 Uppercase letter"));
    });

 it("password should have at least one lowercase letter", function(){
     expect(lowercase("HuioHk")).toBe(true)
     
 })

 it("should have at least one lowercase", () => {
    expect(() => {lowercase("AWRRTYY")}).toThrow(new Error("The password must contain at least 1 lowercase letter"));
    });

 it("password should have at least one number", function(){
     expect(number("1dffjui")).toBe(true);
 });
 it("should throw an error if the password does'nt contain at least one number", function(){
     expect(() => {number("wyugryut")}).toThrow(new Error("The password must contain at least 1 number"));
 })
 it ("password should not be null", function(){
     expect(passwordIsOkay("17uhg")).toBe(true);
 });
 it("should throw an error if the password is empty",function(){
     expect(() => {notNull("")}).toThrow(new Error("The password must not be empty"));
 })
 
})
describe('passwordIsOkay', function(){
    it('should check if password is greater than 8 characters and have least one lowercase ', function(){
        expect(passwordIsOkay('Nothey810')).toBe(true);
    })
    it('should check if password is greater than 8 characters and have at least one uppercase', function(){
        expect(passwordIsOkay('Nothey810')).toBe(true);
    })
    it('should check if password is greater than 8 characters and have atleast one number', function(){
        expect(passwordIsOkay('Nothey810')).toBe(true);
    })
    
    it('should check if password is greater than 8 characters and contains at least one number, upper and lower case ', function(){
        expect(passwordIsOkay('Nothey810')).toBe(true);
    })
   
 })

 