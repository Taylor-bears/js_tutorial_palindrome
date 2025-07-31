// 定义的反转函数：反转一个字符串
function reverse(string) {
    return Array.from(string).reverse().join("");
}

// 改变原生对象
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

function Phrase(content) {
    this.content = content;

    // 回文测试处理的内容
    this.processedContent = function processedContent() {
        return this.content.toLowerCase();
    }

    // 判断回文
    this.palindrome = function palindrome() {
        // 使用自定义的方法
        //return this.processedContent() === reverse(this.processedContent());
        // 使用改变原生的方法
        return this.processedContent() === this.processedContent().reverse();
    }
}

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // 重写回文测试处理的内容
    this.processedContent = function processedContent() {
        return this.translation.toLowerCase();
    }
}
TranslatedPhrase.prototype = new Phrase();