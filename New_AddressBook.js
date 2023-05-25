
window.addEventListener('DOMContentLoaded', (event) => { 
    const name = document.querySelector('#name'); 
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
     if (name.value.length == 0) {
    textError.textContent = "";
    return;
    }
    try {
    (new EmployeePayrollData()).name = name.value;
    textError.textContent = " ";
    } catch (e) {
    textError.textContent = e;
    }
    });
    });


    const address = document.querySelector('#address'); 
    const city = document.querySelector('#city'); 

    const state = document.querySelector('#state'); 

    const zipcode = document.querySelector('#zipcode'); 
    const phonenumber = document.querySelector('#phonenumber'); 

    


const save = () => { 
    try {
         let employeePayrollData = createEmployeePayroll();
         console.log(employeePayrollData)
         createAndUpdateStorage(employeePayrollData);
     } catch (e) {
          return;
     }
    }

    function createAndUpdateStorage (employeePayrollData) {

         let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
         
         if (employeePayrollList != undefined) {
         
         employeePayrollList.push(employeePayrollData);
         
         }else{
         
         employeePayrollList = [employeePayrollData]
         
         }
         
         alert(employeePayrollList.toString());
         
         localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))

    }


    
    const createEmployeePayroll = () => {
         let employeePayrollData = new EmployeePayrollData();
         try {
              employeePayrollData.name = getInputValueById('#name');
          }
           catch (e) {
              setTextValue('.text-error', e);
              throw e;
         }
    
         employeePayrollData.address = getInputValueById('#address');
         console.log(employeePayrollData._address);
         employeePayrollData.city = getInputValueById('#city');
         console.log(employeePayrollData._city);
    
         employeePayrollData.state = getInputValueById('#state');
         console.log(employeePayrollData._state);
    
         employeePayrollData.zipcode = getInputValueById('#zipcode');
         console.log(employeePayrollData._zipcode);
    
         employeePayrollData.phonenumber = getInputValueById('#phonenumber');
         console.log(employeePayrollData._phonenumber);
    
    
         
    alert(employeePayrollData.toString());
    return employeePayrollData;
}


    const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue); 
    let selitems= [];
         allItems.forEach(item => {
              if(item.checked) selitems.push(item.value);
         });
              return selitems;
    }

    

    const getInputValueById = (id) => { 
         let value = document.querySelector(id).value;

         return value;
    }

         const getInputElementValue = (id) => { 
              let value = document.getElementById(id).value; 
              return value;

         }



         const resetForm = () => {

              setValue('#name', '');
              setValue('#address', '');
              setValue('#city', '');
              setValue('#state', '');
              setValue('#zipcode', '');
              setValue('#phonenumber', '');
            
              
              }
              
              const unsetSelectedValues = (propertyValue) => { 
                   
                   let allItems = document.querySelectorAll(propertyValue); 
                   allItems.forEach(item => {
                  item. checked = false;
                   });
              }
              
              const setTextValue = (id, value) => {
              
              const element = document.querySelector(id); 
              element.textContent = value;
              }

              const setValue = (id, value) => {
              
                   const element = document.querySelector(id); 
                   element.value = value;
                   }


                  