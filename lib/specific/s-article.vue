<template>
<article :class="$style.root">
    <router-view></router-view>
</article>
</template>

<script>
export default {
    name: 's-article',
};
</script>

<style>
@import '../assets/atom-one-light.css';
</style>

<style module>
.root {
    position: relative;
    z-index: $z-index-base;
    width: 900px;
    min-height: 400px;
    background: white;
    margin: 40px auto;
    padding: 40px;
    padding-bottom: 60px;
    box-shadow: $box-shadow-base;
}

.root h1, .root h2, .root h3, .root h4, .root h5, .root h6 {
    margin: 1.5em 0 1em;
}

.root h1 {
    text-align: center;
    font-size: 26px;
    line-height: 36px;
    margin: 1em 0 1.2em;
}

.root h2 {
    font-size: 20px;
    line-height: 30px;
}

.root h3 {
    font-size: 18px;
    line-height: 24px;
}

.root h4 {
    font-size: 16px;
    line-height: 22px;
}

.root h5 {
    margin: 0;
    font-size: 14px;
    line-height: 20px;
}

.root h6 {
    margin: 0;
    font-size: 12px;
    line-height: 18px;
}

.root h2 :global(.header-anchor), .root h3 :global(.header-anchor), .root h4 :global(.header-anchor), .root h5 :global(.header-anchor) {
    display: none;
}

.root h2:hover :global(.header-anchor), .root h3:hover :global(.header-anchor), .root h4:hover :global(.header-anchor), .root h5:hover :global(.header-anchor) {
    display: inline;
}

.root :global(.u-article-meta) {
    text-align: center;
    color: #999;
    margin: -1.2em 0 2em;
}

.root a {
    color: $brand-primary;
    $transition: color .2s;
}

.root a:hover {
    text-decoration: underline;
}

.root p {
    margin: 0.5em 0;
}

.root em {
    font-style: normal;
    color: #d05;
}

.root ins {
    text-decoration: underline;
}

.root mark {
    background: #ffa;
    color: #444;
}

.root hr {
    border: none;
    border-top: 1px solid #eee;
    margin: 1em 0;
}

.root small { font-size: 80%; }

.root pre, .root code, .root kbd, .root samp {
    // - Consolas has a better baseline in running text compared to `Courier`
    font-family: 'YaHei Consolas Hybrid', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
}

.root code {
    margin: 0 2px;
    padding: 0 3px;
    font-size: 13px;
    background: #f7f7f7;
    color: #d22f25;
    vertical-align: 1px;
}

.root kbd {
    margin: 0 3px;
    padding: 2px 3px;
    font-size: 12px;
    color: #e74c3c;
    background: #fafafa;
    border-bottom: 2px solid #eee;
    box-shadow: 0 2px 2px #ccc;
}

.root abbr[title] {
    cursor: help;
    border-bottom: 1px dotted;
}

.root dfn {
    font-style: normal;
    font-weight: bold;
}

.root blockquote {
    margin: 0;
    padding: 4px 16px;
    background: #fafafa;
    border-left: 4px solid #eee;
}

.root blockquote footer {
    text-align: right;
}

.root blockquote footer:before {
    content: '—— ';
}

.root pre {
    tab-size: 4;
    overflow: auto;
    padding: 6px 12px;
    font-size: 13px;
    background: #f7f7f7;
    color: #333;
}

.root pre code {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font-size: inherit;
    color: inherit;
    vertical-align: baseline;
}

.root dt {
    font-weight: bold;
}

.root dd {
    margin-left: 0;
}

.root address {
    font-style: normal;
}

.root ul {
    list-style: disc;
    padding-left: 2em;
}

.root :global(.contains-task-list) {
    list-style: none;
    padding: 0;
}

.root ol {
    list-style: decimal;
    padding-left: 2em;
}

.root table {
    /*width: 100%;*/
    margin: 1em auto;
    font-size: 13px;
}

.root table img {
    vertical-align: -5px;
}

.root th, .root td {
    border: 1px solid $border-color-base;
    padding: 0 4px;
}

.root muted {
    color: #999;
}
</style>
