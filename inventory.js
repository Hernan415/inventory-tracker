function addRow()
    {
        // get input values
        var Name = document.getElementById('Name').value;
        var Price = document.getElementById('Price').value;
        var Quantity = document.getElementById('Quantity').value;
        var Value =  document.getElementById('Quantity').value*document.getElementById('Price').value;

        var table = document.getElementsByTagName('table')[0];
        var newRow = table.insertRow(table.rows.length/2+1);

        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);

        cel1.innerHTML = Name;
        cel2.innerHTML = Quantity;
        cel3.innerHTML = Price;
        cel4.innerHTML = Value;

    }
