const normalizeSrc = src => {
    return src.startsWith('/') ? src.slice(1) : src;
};

export default function cloudflareImage({src, width, quality}) {
    const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
    return `https://cdn.stellarmetalworks.com/cdn-cgi/image/${params.join(',')}/${normalizeSrc(src)}`
}