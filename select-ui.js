(function($){
    $.fn.extend({
        selectUI:function(){
            var that=this;
            this.events=$(this);
            this.hideSelf();
            setTimeout(function(){
                $(that).each(function(index,item){
                    that.selectArry(item,that.setdefultVal(item));
                })
            },500)
        },
        hideSelf:function(){
            $(this).addClass('selectHid');
        },
        creatEl:function(el,val){
            var that=this;
            this.resetEl();
            var $selectDiv=$("<div class='rol-select'></div>");
            var $defultVal=$("<div class='rol-selected'></div>");
            $($defultVal).text(val).on("click",that.showDrowList);
            $($selectDiv).append($defultVal);
            $($selectDiv).append(this.creatList(el));
            $(el).after($selectDiv);
        },
        creatList:function(el){
            var that=this;
            var list=$(el).children('option');
            var $list=$("<ul></ul>");
            $list.on('mouseleave ',that.leaveHid);
            $.each(list,function(index,item) {
                var $rolOption=$('<li>'+$(item).text()+'</li>');
                $rolOption.on('click ',that.choseOption);
                $($list).append($rolOption);
            });
            return $list;
        },
        resetEl:function(){
            $(this).parent().remove(".rol-select")
        },
        selectArry:function(item,val){
            var that=this;
            that.creatEl(item,val);
        },
        setdefultVal:function(el){
            return $(el).find("option:selected").text();

        },
        showDrowList:function(){
            $(this).siblings('ul').toggle();
        },
        choseOption:function(){
            var that=this;
            var $index=$(this).index();
            var $val=$(this).text();
            $(this).parent().siblings('.rol-selected').text($val);
            $(this).parents(".rol-select").siblings('select').get(0).selectedIndex=$index;
            $(this).parents(".rol-select").siblings('select').trigger("change");
            $(this).parent("ul").hide();
        },
        leaveHid:function(){
            $(this).hide();
        },
    });

})(jQuery)
