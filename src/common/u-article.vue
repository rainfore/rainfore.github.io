<template>
<article :class="$style.root">
    <slot><router-view></router-view></slot>
</article>
</template>

<script>
export default {
    name: 'u-article',
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
    background: white;
    margin: 30px auto;
    padding: 40px;
    box-shadow: $box-shadow-base;
}

@media screen and (max-width: $media-md-max-width) {
    .root {
        width: auto;
        margin: 10px;
        padding: 20px;
        overflow-x: hidden;
    }
}

.root h1, .root h2, .root h3, .root h4, .root h5, .root h6 {
    font-weight: 500;
    margin: 1.5em 0 1em;
}

.root h1 {
    text-align: center;
    font-size: 25px;
    font-weight: 400;
    line-height: 36px;
    margin: 1em 0 1.2em;
}

.root h1 a {
    color: inherit;
}

.root h1 a:hover {
    color: $brand-primary;
    text-decoration: none;
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
    margin: 0.8em 0 0.4em;
    font-size: 14px;
    line-height: 20px;
}

.root h6 {
    margin: 0.8em 0 0.4em;
    font-size: 12px;
    line-height: 18px;
}

.root h2 :global(.header-anchor), .root h3 :global(.header-anchor), .root h4 :global(.header-anchor), .root h5 :global(.header-anchor), .root h6 :global(.header-anchor) {
    display: none;
}

.root h2:hover :global(.header-anchor), .root h3:hover :global(.header-anchor), .root h4:hover :global(.header-anchor) {
    display: inline;
}

.root :global(.u-article_meta) {
    text-align: center;
    font-size: 13px;
    color: #999;
    margin: -1.5em 0 2em;
}

.root a {
    color: $brand-primary;
    transition: all .2s;
}

.root a:hover {
    text-decoration: underline;
}

.root :global(.u-article_footer) {
    margin-top: 1.8em;
    margin-bottom: 0;
    font-size: 13px;
    overflow: auto;
}

.root :global(.u-article_read-more) {
    float: right;
    padding: 0 4px;
}

.root :global(.u-article_read-more):hover {
    color: white;
    background: rgba(210, 47, 37, 0.7);
    text-decoration: none;
}

.root :global(.u-article_tag) {
    background: #eee;
    color: #777;
    padding: 2px 6px;
    border-radius: 3px;
}

.root :global(.u-article_tag):before {
    content: '# ';
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
    color: #e96900;
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

.root figure {
    margin: 1em -40px;
}

.root figure img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
}

.root figcaption {
    font-size: 12px;
    font-weight: bold;
    text-align: center;
}
</style>
