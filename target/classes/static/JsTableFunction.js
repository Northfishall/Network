function initTableP()
{
    var tables = layui.table;

    //转换静态表格
    tables.init('TableP',
        {
            height: 315 //设置高度
            ,limit: 10 //注意：请务必确保 limit 参数（默认：10）是与你服务端限定的数据条数一致
            //支持所有基础参数
        });
}
function initTableT()
{
    var tables = layui.table;

    //转换静态表格
    tables.init('TableT',
        {
            height: 315 //设置高度
            ,limit: 10 //注意：请务必确保 limit 参数（默认：10）是与你服务端限定的数据条数一致
            //支持所有基础参数
        });
}
function initTableF()
{
    var tables = layui.table;

    //转换静态表格
    tables.init('TableF',
        {
            height: 315 //设置高度
            ,limit: 10 //注意：请务必确保 limit 参数（默认：10）是与你服务端限定的数据条数一致
            //支持所有基础参数
        });
}





function loadDataP(data){
    var tableHtml = "";


    var str ="";
    for(var i in data)
    {
        str += "<tr>\n";
        str += "<td>"+data[i].index+"</td>\n";
        str += "<td>"+data[i].PFoodName+"</td>\n";
        str += "<td>"+data[i].PCompanyName+"</td>\n";
        str += "<td>"+data[i].PProductDate+"</td>\n";
        str += "<td>"+data[i].PSaveTime+"</td>\n"; //懒得改了
        str += "<td>"+data[i].PTel+"</td>\n";
        str += "<td>"+data[i].PLocation+"</td>\n";
        str += "<td>"+data[i].POriginal+"</td>\n";
        str += "</tr>\n";
    }





    tableHtml += str;
    console.log(tableHtml);
    document.getElementById("tablep_body").innerHTML = tableHtml;

    initTableP();

}

function loadDataT(data){
    var tableHtml = "";
    var str = "";
    for(var i in data){
        str += "<tr>\n";
        str += "<td>"+data[i].index+"</td>\n";
        str += "<td>"+data[i].TFoodName+"</td>\n";
        str += "<td>"+data[i].TCompanyName+"</td>\n";
        str += "<td>"+data[i].TLocation+"</td>\n";
        str += "<td>"+data[i].TDateIn+"</td>\n";
        str += "<td>"+data[i].TDataOut+"</td>\n"; //懒得改了
        str += "<td>"+data[i].other+"</td>\n";

        str += "</tr>\n";

    }

    tableHtml += str;
    console.log(tableHtml);
    document.getElementById("tablet_body").innerHTML = tableHtml;

    initTableT();

}

function loadDataF(data){
    var tableHtml = "";
    var str = "";
    console.log("loadData");
    console.log(data);

    for(var i in data){
        console.log("data in i :");
        console.log(i);
        str += "<tr>\n";
        str += "<td>"+data[i].index+"</td>\n";
        str += "<td>"+data[i].SFoodName+"</td>\n";
        str += "<td>"+data[i].SCompanyName+"</td>\n";
        str += "<td>"+data[i].SLocation+"</td>\n";
        str += "<td>"+data[i].SData+"</td>\n";
        str += "<td>"+data[i].other+"</td>\n";
        str += "</tr>\n";
    }

    tableHtml += str;
    console.log(tableHtml);
    document.getElementById("tablef_body").innerHTML = tableHtml;

    initTableF();

}
