let tempale = [
        '<div class="alert">',
            '<p>foo</p>',
        '</div>'
].join('');

console.log(tempale);

new Vue({
    tempale: `
        <div class="alert">
            <p>foo</p>
        </div>
    `
});