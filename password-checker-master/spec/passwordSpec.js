describe("Password Validity", function(){
    it("should check if password is longer than 8 characters", () => {
        expect(() => {passwordIsValid("QLjghH2")}).toThrow(new Error("The password should be larger than 8 characters"));
    });
    it ("password should return true if the password is not null", function(){
        expect(passwordIsOkay("17uhg")).toBe(true);
        });
    it("should throw an error if the password is null", () => {
            expect(() => {passwordIsValid("")}).toThrow(new Error("The password should not be null"));
        });
    it("should return true if the password is greater than 8 characters", function(){
        expect(passwordIsValid("LguiopL8o")).toBe(true);
    })

    it("should throw an error if the password does not contain atleast one uppercase letter", () => {
        expect(() => {passwordIsValid("jhgfjhfu7yuio9")}).toThrow(new Error("The password must have atleast 1 uppercase letter"));
    })

    it("should throw an error if the password does not contain at least one lowercase letter", () => {
        expect(() => {passwordIsValid("45LLKLKLYUUI")}).toThrow(new Error("The password should have at least one lowercase letter"));
    })

    it("should throw an error is password does not contain atleast one number", () => {
        expect(() => {passwordIsValid("HKFHSJFOuooujg")}).toThrow(new Error("The password should have at least one number"));
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

 