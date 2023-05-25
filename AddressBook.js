class EmployeePayrollData {
    get id(){ 
        return this._id; 
    }
    set id(id){
      this._id = id; 
    }
    
    get name() { return this._name; } 
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if (nameRegex.test (name)) 
        this._name = name;
       else throw 'Name Incorrect';
    }


    get address() { return this._address; } 
    set address(address) {
        this._address = address;
    }
    
    get city() { return this._city; } 
    set city(city) {
        this._city = city;
    }
   
    get state() { return this._state; } 
    set state(state) {
        this._state = state;
    }

    get zipcode() { return this._zipcode; } 
    set zipcode(zipcode) {
        this._zipcode =zipcode;
    }


    get phonenumber() { return this._phonenumber; } 
    set phonenumber(phonenumber) {
        this._phonenumber =phonenumber;
    }
    

toString() {

                
            return "id=" + this.id
             +",name=" + this.name 
             +",address=" + this.address 
             +",city=" + this.city 
             +",state=" + this.state 
             +",zipcode=" + this.zipcode 
             +",phonenumber=" + this.phonenumber 
            
            
            
             
}
}

