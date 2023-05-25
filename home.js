window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
    
    });
    
    // Template literal ES6 feature
    
    const createInnerHtml = () => { 

         const innerHtml =`
    <tr>
          
    <th>Name</th>
    <th>Address</th>
    <th>City</th>
    <th>State</th>
    <th>Zipcode</th>
    <th>Phone number</th>
    <th>Actions</th> 
    </tr>
    
    <tr>
    
    <tr>
<td>kirti madan</td>
<td>at post jalna</td>
<td>beed</td>
<td>Mh</td>
<td>232334</td>
<td>9778878778</td>
<td>

<img id="1" onclick="remove(this)"alt="delete" src="\assets\assets\icons\delete.svg"> 
<img id="1" alt="edit" onclick="update(this)" src="\assets\assets\icons\edit.svg">
</td>
</tr> 
    
    `;

    document.querySelector('#table-display').innerHTML = innerHtml;
    }


    