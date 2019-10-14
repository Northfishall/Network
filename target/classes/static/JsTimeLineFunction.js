function loadTimeline(dataP,dataT,dataF)
{
    var TimeLineHtml = "";
    console.log("loadTimeLind");
    console.log(dataP);
    console.log(dataT);
    console.log(dataF);
    var str = "";
    for(var i in dataP)
    {
        str +="<li class=\"layui-timeline-item\">\n" +
            "<i class=\"layui-icon layui-timeline-axis\">&#xe63f;</i>\n" +
            "<div class=\"layui-timeline-content layui-text\">\n" +
            "<div class=\"layui-timeline-title\">"+dataP[i].PFoodName+"</div>\n" +
            "</div>\n" +
            "</li>";
        str += "<li class=\"layui-timeline-item\">\n";
        str += "<i class=\"layui-icon layui-timeline-axis\">&#xe63f;</i>\n";
        str += "<div class=\"layui-timeline-content layui-text\">\n";
        str += "<h3 class=\"layui-timeline-title\">"+dataP[i].PProductDate+"</h3>\n";
        str += "<p>\n";
        str += "生产地址："+dataP[i].PLocation;
        str += "<br>"+"生产商："+dataP[i].PCompanyName;
        str += "<br>生产";
        str += "</p>\n";
        str += "</div>\n";
        str += "</li>"
    }

    for(var j in dataT)
    {
        str += "<li class=\"layui-timeline-item\">\n";
        str += "<i class=\"layui-icon layui-timeline-axis\">&#xe63f;</i>\n";
        str += "<div class=\"layui-timeline-content layui-text\">\n";
        str += "<h3 class=\"layui-timeline-title\">"+dataT[j].TDateIn+"</h3>\n";
        str += "<p>\n";
        str += "仓库地址："+dataT[j].TLocation;
        str += "<br>"+"运输商："+dataT[j].TCompanyName;
        str += "<br>入库";
        str += "</p>\n";
        str += "</div>\n";
        str += "</li>";

        str += "<li class=\"layui-timeline-item\">\n";
        str += "<i class=\"layui-icon layui-timeline-axis\">&#xe63f;</i>\n";
        str += "<div class=\"layui-timeline-content layui-text\">\n";
        str += "<h3 class=\"layui-timeline-title\">"+dataT[j].TDataOut+"</h3>\n";
        str += "<p>\n";
        str += "仓库地址："+dataT[j].TLocation;
        str += "<br>"+"运输商："+dataT[j].TCompanyName;
        str += "<br>出库";
        str += "</p>\n";
        str += "</div>\n";
        str += "</li>";

    }
    for(var k in dataF)
    {
        str += "<li class=\"layui-timeline-item\">\n";
        str += "<i class=\"layui-icon layui-timeline-axis\">&#xe63f;</i>\n";
        str += "<div class=\"layui-timeline-content layui-text\">\n";
        str += "<h3 class=\"layui-timeline-title\">"+dataF[k].SData+"</h3>\n";
        str += "<p>\n";
        str += "经销商地址："+dataF[k].SLocation;
        str += "<br>"+"经销商："+dataF[k].SCompanyName;
        str += "</p>\n";
        str += "</div>\n";
        str += "</li>"
    }
    str += "<li class=\"layui-timeline-item\">\n" +
        "<i class=\"layui-icon layui-timeline-axis\">&#xe63f;</i>\n" +
        "<div class=\"layui-timeline-content layui-text\">\n" +
        "<div class=\"layui-timeline-title\">...</div>\n" +
        "</div>\n" +
        "</li>";
    TimeLineHtml += str;
    console.log(TimeLineHtml);
    document.getElementById("TimeLine").innerHTML = TimeLineHtml;
}