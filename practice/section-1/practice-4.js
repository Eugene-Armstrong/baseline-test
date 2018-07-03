'use strict';

function collectSameElements(collectionA, objectB) {
	var sameArr = []; //存放相同元素的集合
	var astr = ""; //存放A集合中元素的key属性为string
	var bstr = objectB.value.toString(); //存放B对象中value属性中的元素为string
	for (var i = 0; i < collectionA.length; i++) { 
		astr += collectionA[i].key; //遍历追加A集合中元素的key属性
		if(bstr.indexOf(collectionA[i].key.toString())>-1){ //比对字符串
			sameArr.push(collectionA[i].key); //将相同元素追加到该集合中
		}
	}
  return sameArr; 
}
