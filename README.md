# Blueberry Boost - Static Website

Uma replicação estática e totalmente funcional do site Blueberry Boost, compatível com WordPress, GitHub Pages e qualquer servidor web.

## 📋 Características

- ✅ **HTML/CSS/JavaScript Puro** - Sem dependências de frameworks
- ✅ **Totalmente Responsivo** - Funciona em desktop, tablet e mobile
- ✅ **SEO Otimizado** - Meta tags, Open Graph, Twitter Card
- ✅ **Acessível** - WCAG 2.1 compliant
- ✅ **Rápido** - Carregamento instantâneo
- ✅ **WordPress Compatible** - Pronto para upload
- ✅ **GitHub Pages Ready** - Deploy direto no GitHub

## 📁 Estrutura de Arquivos

```
blueberry-static-site/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interativo
├── README.md           # Este arquivo
└── .htaccess          # Configuração Apache (opcional)
```

## 🚀 Como Usar

### Opção 1: GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings → Pages
4. Selecione "Deploy from a branch"
5. Escolha a branch `main` e pasta `/ (root)`
6. Clique em Save

Seu site estará disponível em: `https://seu-usuario.github.io/seu-repositorio`

### Opção 2: WordPress

1. Acesse o painel de administração do WordPress
2. Vá em Plugins → Adicionar Novo
3. Procure por "Static HTML" ou "Simply Static"
4. Instale e ative o plugin
5. Faça upload dos arquivos via FTP ou File Manager
6. Configure a página inicial para apontar para `index.html`

### Opção 3: Servidor Web Tradicional (Apache, Nginx)

1. Faça upload dos arquivos para o seu servidor via FTP
2. Certifique-se de que o arquivo `.htaccess` está presente (para Apache)
3. Acesse via seu domínio

## 🎨 Personalização

### Alterar Cores

Edite `styles.css` e procure por:
- `#2d2dd2` - Cor primária (azul)
- `#1f242e` - Cor de texto escuro
- `#ffffff` - Fundo branco

### Alterar Fontes

As fontes estão definidas em `index.html`:
- `Playfair Display` - Para títulos
- `Inter` - Para corpo de texto

Para mudar, edite a linha no `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Sua+Fonte:wght@400;700&display=swap" rel="stylesheet">
```

### Alterar Conteúdo

Abra `index.html` e edite:
- Títulos e descrições
- Texto do artigo
- Links do YouTube
- Meta tags para SEO

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## ♿ Acessibilidade

- Contraste de cores WCAG AA
- Navegação por teclado
- Atributos ARIA
- Imagens com alt text
- Estrutura semântica HTML

## 🔍 SEO

- Meta tags otimizadas
- Open Graph para redes sociais
- Twitter Card
- Sitemap pronto (adicionar se necessário)
- Robots.txt pronto (adicionar se necessário)

## 📊 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Mobile browsers

## 🛠️ Troubleshooting

### Imagens não carregam
- Verifique se a URL da imagem está correta em `index.html`
- Certifique-se de que a imagem está acessível publicamente

### Estilos não aparecem
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se `styles.css` está no mesmo diretório que `index.html`

### Botão YouTube não funciona
- Verifique sua conexão com a internet
- Certifique-se de que JavaScript está habilitado

## 📝 Licença

Este projeto é fornecido como está para uso pessoal e comercial.

## 📧 Suporte

Para dúvidas ou problemas, consulte a documentação ou entre em contato com o suporte.

---

**Versão:** 1.0.0  
**Última atualização:** Fevereiro 2026
