import os
import re

uswds_dir = 'node_modules/@uswds/uswds/dist/img/usa-icons'

names = [
    'shield', 'security', 'lock', 'check', 'launch', 'login', 'account_circle',
    'account_balance', 'fingerprint', 'link', 'verified', 'navigate_before',
    'navigate_next', 'share', 'content_copy', 'autorenew', 'info',
    'facebook', 'x', 'twitter', 'linkedin', 'instagram', 'github', 'public', 'send'
]

icons_dict = {}

for name in names:
    p = os.path.join(uswds_dir, f'{name}.svg')
    content = open(p).read().strip()
    inner = re.sub(r'^<svg[^>]*>', '', content)
    inner = re.sub(r'</svg>$', '', inner).strip()
    # remove fill="none" d="M0 0h24v24H0z" background paths if present
    inner = re.sub(r'<path fill="none" d="M0 0h24v24H0z"/>', '', inner)
    icons_dict[name] = inner

# Add whatsapp and cookie with standard viewBox 24x24
icons_dict['whatsapp'] = '<path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.13.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>'
icons_dict['cookie'] = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.64-.06-1.27-.18-1.87-.24-1.2-.84-2.26-1.7-3.08-.85-.82-1.92-1.38-3.12-1.55C8.4 4.3 7.6 3.32 7.6 2.2c0-.07.01-.13.01-.2C10.42 2.01 11.22 2 12 2zm-1.5 6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-3 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm6 3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm2-6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/>'

header = """---
/**
 * Icon.astro - Componente Atómico de Iconos Oficiales USWDS (U.S. Web Design System)
 * Extraídos directamente de @uswds/uswds/dist/img/usa-icons/
 * Cumple con el estándar de diseño oficial de EE. UU. (viewBox 0 0 24 24, clase usa-icon)
 */

export interface Props {
  name:
    | 'shield'
    | 'security'
    | 'lock'
    | 'check'
    | 'launch'
    | 'login'
    | 'account_circle'
    | 'account_balance'
    | 'fingerprint'
    | 'link'
    | 'verified'
    | 'navigate_before'
    | 'navigate_next'
    | 'share'
    | 'content_copy'
    | 'autorenew'
    | 'info'
    | 'facebook'
    | 'x'
    | 'twitter'
    | 'linkedin'
    | 'instagram'
    | 'github'
    | 'public'
    | 'send'
    | 'whatsapp'
    | 'cookie';
  size?: number | string;
  fill?: string;
  class?: string;
  style?: string;
  ariaHidden?: boolean;
}

const {
  name,
  size = 20,
  fill = 'currentColor',
  class: className = '',
  style: styleAttr = '',
  ariaHidden = true,
} = Astro.props;

const ICONS: Record<string, string> = {
"""

footer = """};

const inner = ICONS[name] || '';
const pixelSize = typeof size === 'number' ? `${size}px` : size;
const sizeStyle = `width:${pixelSize};height:${pixelSize};`;
const combinedStyle = styleAttr ? `${sizeStyle};${styleAttr}` : sizeStyle;
---

<svg
  class={`usa-icon ${className}`.trim()}
  viewBox="0 0 24 24"
  fill={fill}
  style={combinedStyle}
  aria-hidden={ariaHidden ? 'true' : undefined}
  set:html={inner}
/>
"""

body = ""
for k in sorted(icons_dict.keys()):
    v = icons_dict[k]
    body += f"  {repr(k)}: {repr(v)},\n"

full_content = header + body + footer

os.makedirs('src/components/atoms', exist_ok=True)
with open('src/components/atoms/Icon.astro', 'w') as f:
    f.write(full_content)

print(f"Generated Icon.astro with {len(icons_dict)} official USWDS icons!")
