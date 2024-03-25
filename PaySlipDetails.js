

let bp=document.getElementById('bp')
bp.addEventListener('keyup',()  => {
    let bpvalue = parseInt(bp.value);
    hra.value = bpvalue / 10;
    da.value = Math.round(bpvalue * 0.05)
    tvl.value = Math.round(bpvalue * 0.15)
    pf.value = Math.round(bpvalue * 0.15)

    netsly.value = parseInt(hra.value) + parseInt(da.value) + parseInt(tvl.value) + parseInt(pf.value);
    gross.value = bpvalue - parseInt(netsly.value);
});


let a=document.getElementById('print').addEventListener('click', () => {
    if (bp.value != '') {
        tbody.innerHTML += `<tr>
        <td>${empname.value}</td>
        <td>${empid.value}</td>
        <td>${empdesig.value}</td>
        <td>${bp.value}</td>
        <td>${hra.value}</td>
        <td>${da.value}</td>
        <td>${tvl.value}</td>
        <td>${pf.value}</td>
        <td>${gross.value}</td>
        <td>${netsly.value}</td>
        </tr>`;

    
        table.classList.add('visible');

        let newData = {
            empname: empname.value,
            empid: empid.value,
            empdesig: empdesig.value,
            bp: bp.value,
            hra: hra.value,
            da: da.value,
            tv1: tvl.value,
            pf: pf.value,
            gross: gross.value,
            netsly: netsly.value
        };
        
       

        let existData = localStorage.getItem('newData') ? JSON.parse(localStorage.getItem('newData')) : [];
        existData.push(newData);
        localStorage.setItem('newData', JSON.stringify(existData));
        

    } else {
        alert("Enter All Details");
    }
    empname.value = '';
        empid.value = '';
        empdesig.value = '';
        bp.value = '';
        hra.value="";
        da.value="";
        tvl.value="";
        pf.value="";
        gross.value="";
        netsly.value="";
});

