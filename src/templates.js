export function row(content) {
    return `<section class="row">${content}</section>`;
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`;
}
export const templates = {
   title: title,
   text: text,
   columns: columns,
   image: image,
};