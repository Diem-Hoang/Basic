let array = [];
let str = "";
array[1] ='T';
array[2] ='Ô';
array[3] ='I';
array[4] =' ';
array[5] ='L';
array[6] ='À';
array[7] =' ';
array[8] ='M';
array[9] ='Ộ';
array[10] ='T';
array[11] =' ';
array[12] ='T';
array[13] ='H';
array[14] ='Ằ';
array[15] ='N';
array[16] ='G';
array[17] =' ';
array[18] ='N';
array[19] ='G';
array[20] ='Ố';
array[21] ='C';
array[22] ='!';

function fake()
{
    let text = document.getElementById("txt").value;
    for(let i = 1; i <= text.length; i++)
    {
        str = str + array[i];
        if (i === 22)
        {
            str = "";
        }
    }
    document.getElementById("txt").value = str;
    str = "";
    setTimeout("fake()", 1);
}