import Widget from 'resource:///com/github/Aylur/ags/widget.js';

/**
 * 
 * @param {string} icon the name of the icon from the Material Icon set
 * @param {number} size the desired size of the icon
 * @param {{}} props Primarily from Gtk.Label
 * @returns 
 */
export const MaterialIcon = (icon, size, props = {}) => Widget.Label({
    className: `icon-material txt-${size}`,
    label: icon,
    ...props,
})
