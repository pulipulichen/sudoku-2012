/**
 * 題目
 * @param {String} _question_id
 */
function Sudoku_Collection(_question_id) {
	
}

/**
 * 數獨的階層數量，一列有幾格。
 */
Sudoku_Collection.prototype._level = 9;

Sudoku_Collection.prototype._classname = {
	
};

Sudoku_Collection.prototype._ele = null;

Sudoku_Collection.prototype.create_ele = function () {
	
};

Sudoku_Collection.prototype.create_row = function (_row) {
	
};

Sudoku_Collection.prototype.create_field = function (_row, _col) {
	
};

Sudoku_Collection.prototype.create_controller = function () {
	
};

Sudoku_Collection.prototype.create_textarea = function () {
	
};

/**
 * ------------
 * 控制行為
 * ------------
 */

/**
 * 清除所有數字
 */
Sudoku_Collection.prototype.clear = function () {
	
};

/**
 * 清除題目以外的數字
 */
Sudoku_Collection.prototype.reset_questiones = function () {
	
};

/**
 * 開始計算解答
 */
Sudoku_Collection.prototype.solve = function () {
	
};

/**
 * 將結果輸出成文字檔
 * 
 */
Sudoku_Collection.prototype.export_result = function () {
	
};

Sudoku_Collection.prototype.get_result_text = function () {
	
};

Sudoku_Collection.prototype.import_question = function () {
	
};



//----------------------------------------------

function Sudoku_Question_Textarea() {
	
}

Sudoku_Question_Textarea.prototype._ele = null;

Sudoku_Question_Textarea.prototype.create_ele = function () {
	
	//建立textarea
	
	//建立動作按鈕，先隱藏
	
	//建立關閉按鈕
	
	
};

Sudoku_Question_Textarea.prototype.show = function () {
	
};

Sudoku_Question_Textarea.prototype.hide = function () {
	
};

Sudoku_Question_Textarea.prototype.set_value = function (_text) {
	
};

Sudoku_Question_Textarea.prototype.clear_value = function () {
	
};

Sudoku_Question_Textarea.prototype.show_action = function(_callback) {
	
};

Sudoku_Question_Textarea.prototype.hide_action = function () {
	
};

Sudoku_Question_Textarea.prototype.set_focus_select = function (_boolean) {
	
};

/**
 * 使用Question_Textarea
 * @param {Function} _action
 */
Sudoku_Question_Textarea.prototype.call = function(_action) {
	
	//確認是否有預設動作
	
		//有的話，顯示動作按鈕
		
		//沒有的話，隱藏動作按鈕
	
	
};

//----------------------------------------------

/**
 * 欄位
 * @param {Object} _row
 * @param {Object} _col
 */
function Sudoku_Field(_row, _col) {
	
	this.set_position
}

/**
 * 統一管理classname
 * @type {JSON}
 */
Sudoku_Field.prototype._classname = {
	field: "field",
	question: "question",
	focused: "focused"
	
};

/**
 * 列
 */
Sudoku_Field.prototype._row = null;

/**
 * 欄
 */
Sudoku_Field.prototype._col = null;

/**
 * 方格，簡稱sq
 */
Sudoku_Field.prototype._square = null;

/**
 * 填色類型
 * 0 = 深色
 * 1 = 淺色
 */
Sudoku_Field.prototype._style = 0;

/**
 * 初始化標記
 */
Sudoku_Field.prototype.inited = false;

/**
 * 進行初始化
 * @param {Object} _row
 * @param {Object} _col
 */
Sudoku_Field.prototype.init = function (_row, _col) {
	
	//建立物件
	
	//設定位置
	
};

/**
 * 建立物件
 * @return {jQuery}
 */
Sudoku_Field.prototype.create_ele = function () {
	
	var _ele = $('<input type="text" class="field" size="1" />');
	
	this.ele = _ele;
	
	return _ele;
};

/**
 * 欄位本身的jQuery物件。 
 * 跟this.create_ele()一組
 */
Sudoku_Field.prototype.ele = null;

/**
 * 設定位置
 * @param {number} _row	
 * @param {number} _col
 */
Sudoku_Field.prototype.set_position = function (_row, _col) {
	this._row = _row;
	this._col = _col;
	if (_row < 4)
	{
		if (_col < 4) {
			_field.addClass("area-a").addClass("style-I").attr("area", "a");
		}
		else if (_col > 3 & _col < 7) {_field.addClass("area-b").addClass("style-II").attr("area", "b");}
		else if (_col > 6) {_field.addClass("area-c").addClass("style-I").attr("area", "c");}
	}
	if (_row > 3 & _row < 7)
	{
		if (_col < 4) {_field.addClass("area-d").addClass("style-II").attr("area", "d");}
		else if (_col > 3 & _col < 7) {_field.addClass("area-e").addClass("style-I").attr("area", "e");}
		else if (_col > 6) {_field.addClass("area-f").addClass("style-II").attr("area", "f");}
	}
	if (_row > 6)
	{
		if (_x < 4) {_field.addClass("area-g").addClass("style-I").attr("area", "g");}
		else if (_x > 3 & _x < 7) {_field.addClass("area-h").addClass("style-II").attr("area", "h");}
		else if (_x > 6) {_field.addClass("area-i").addClass("style-I").attr("area", "i");}
	}
	
};

Sudoku_Field.prototype.clear = function () {
	
};

Sudoku_Field.prototype.focus = function () {
	
};

Sudoku_Field.prototype.blur = function () {
	
};

Sudoku_Field.prototype.set_number = function (_number) {
	
};

Sudoku_Field.prototype.set_question = function () {
	
};

Sudoku_Field.prototype.unset_question = function () {
};

/**
 * @return {boolean}
 */
Sudoku_Field.prototype.is_question = function () {
	
};

Sudoku_Field.prototype.get_number_row = function () {
	
};

Sudoku_Field.prototype.get_number_col = function () {
	
};

Sudoku_Field.prototype.get_number_sq = function () {
	
};

/**
 * 該欄位還可能可以猜測的數字
 */
Sudoku_Field.prototype.remains = [];

Sudoku_Field.prototype.count_remains = function () {
	
};

Sudoku_Field.prototype.remove_remains = function (_number) {
	
};

Sudoku_Field.prototype.add_remain = function (_number) {
	
};

/**
 * 該欄位已經猜測過的數字
 */
Sudoku_Field.prototype.passed = [];

Sudoku_Field.prototype.add_passed = function (_number) {
	
};

Sudoku_Field.prototype.remove_passed = function (_number) {
	
};

//---------------------------------------------------

