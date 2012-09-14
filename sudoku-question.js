$.question = {
	/**
	 * PROPERTY
	 */
	_header: "sudoku2012-",
	_component: "#sudoku2012-question",
	fields: {},
	
	/**
	 * METHOD
	 */
	_init_fields: function () {
		
	},
	
	init: function() {
		var _this = this;
		var _header = this._header;
		
		this._component = $(this._component);
		var _ques = this._component;
		
		var _FIELD_LAST_NUMBER = null;
		
		for (var _y = 1; _y < 10; _y++)
		{
			var _row = $('<div id="'+_header+'-row-'+_y+'"></div>');
			
			_row.appendTo(_ques);
		
			for (var _x = 1; _x < 10; _x++)
			{
				var _id = _header + _x + "" + _y;
				
				var _field = $('<input type="text" id="'+_id+'" size="1" class="field x-'+_x+' y-'+_y+'" col="'+_x+'" row="'+_y+'" />');
				
				//鎖定標示
				var _focused_class = "focused";
				_field.focus(function () {
					$(this).toggleClass(_focused_class);
					_FIELD_LAST_NUMBER = this.value;
				});
				_field.blur(function () {$(this).toggleClass(_focused_class)});
				
				//限制資料內容
				_field.change(function (_event) {
					var _value = parseInt(this.value) + "";
					
					if (_value.length > 1)
					{
						this.value = _FIELD_LAST_NUMBER;
					}
					else if (_value.length == 0)
					{
						this.value = "";
					}
				});
				
				//繪製方格
				if (_y < 4)
				{
					if (_x < 4) {_field.addClass("area-a").addClass("style-I").attr("area", "a");}
					else if (_x > 3 & _x < 7) {_field.addClass("area-b").addClass("style-II").attr("area", "b");}
					else if (_x > 6) {_field.addClass("area-c").addClass("style-I").attr("area", "c");}
				}
				if (_y > 3 & _y < 7)
				{
					if (_x < 4) {_field.addClass("area-d").addClass("style-II").attr("area", "d");}
					else if (_x > 3 & _x < 7) {_field.addClass("area-e").addClass("style-I").attr("area", "e");}
					else if (_x > 6) {_field.addClass("area-f").addClass("style-II").attr("area", "f");}
				}
				if (_y > 6)
				{
					if (_x < 4) {_field.addClass("area-g").addClass("style-I").attr("area", "g");}
					else if (_x > 3 & _x < 7) {_field.addClass("area-h").addClass("style-II").attr("area", "h");}
					else if (_x > 6) {_field.addClass("area-i").addClass("style-I").attr("area", "i");}
				}
				
				//指定位置
				_this.fields[_id] = _field;
				_field.appendTo(_row);
				
				//增加額外的功能
				_field.get_other_fields = function () {
					var _output_fields = {
						"0": [],
						"1": [],
						"2": [],
						"col": [],
						"row": [],
						"area": []
					};
					
					var _id = $(this).attr("id");
					var _row = $(this).attr("row");
					var _col = $(this).attr("col");
					var _area = $(this).attr("area");
					
					var _ques = $("#sudoku2012-question");
					
					_r = 0
					_ques.find("[row="+_row+"]:not(#"+_id+")").each(function () {
						_output_fields[0][_r] = _this.fields[this.id];
						_output_fields['row'][_r] = _this.fields[this.id];
						_r++;
					});
					
					_c = 0
					_ques.find("[col="+_col+"]:not(#"+_id+")").each(function () {
						_output_fields[1][_c] = _this.fields[this.id];
						_output_fields['col'][_c] = _this.fields[this.id];
						_c++;
					});
					
					_a = 0
					_ques.find("[area="+_area+"]:not(#"+_id+")").each(function () {
						_output_fields[0][_a] = _this.fields[this.id];
						_output_fields["area"][_a] = _this.fields[this.id];
						_a++;
					});
					
					return _output_fields;
				};
				
				/**
				 * 設定成題目
				 */
				_field.set_question = function () {
					if (this.value == "")
						return;
					
					var _field = $(_this.fields[this.id]);
					
					_field.addClass("question");
				};
				
				_field.unset_question = function () {
					var _field = _this.fields[this.id];
					_field.toggleClass("question");
				};
				
				//測試用
				_field.click(function () {
					var _output = _this.fields[this.id].get_other_fields(); 
					for (var _i in _output["row"])
					{
						_output["row"][_i].toggleClass("focused");
					}
				});
			}
		}
		
		//controller
		var _controller_container = $('<div class="controller"></div>');		
		_controller_container.appendTo(_ques);
		
		/**
		 * 清除數字 
		 */
		var _clear_btn = $('<button type="button">'+'清除'+'</button>')
			.appendTo(_controller_container)
			.click(function () {
				_this.clear();
			});
		
		/**
		 * 設定為題目 
		 */
		var _start_btn = $('<button type="button">'+'開始解題'+'</button>')
			.appendTo(_controller_container)
			.click(function () {
				_this.start();
			}); 
				
	},	//init
	clear: function () {
		var _ques = this._component;
		if (window.confirm("確定要清除題目嗎？"))
			_ques.find(".field").val("");
	},
	start: function () {
		var _ques = this._component;
		
		for (var _i in this.fields)
		{
			this.fields[_i].set_question();
		}
	}
};
