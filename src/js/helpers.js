export function icon(prefix, iconName) {
    const icon = window.fa({ prefix, iconName })
    if (!icon) {
        return ''
    }
    const [html] = icon.html
    if (!html) {
        return ''
    }
    return html
}