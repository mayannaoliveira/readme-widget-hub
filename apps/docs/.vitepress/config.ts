import type { Locale } from '@readme-widget-hub/meta'
import type { WidgetTree } from '@readme-widget-hub/widget'
import type { DefaultTheme, LocaleConfig, UserConfig } from 'vitepress'
import path from 'node:path'
import { Manager } from '@readme-widget-hub/manager'
import { path2Url } from '@readme-widget-hub/utils'
// @ts-expect-error ignore export default warning
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'
import { defineConfig } from 'vite'
import pkg from '../package.json'
import { loadEnv } from './env'
import { watchFiles } from './plugin/watch-files'

const rootDir = path.resolve(__dirname, '../../../')

export default defineConfig(() => {
  const env = loadEnv(rootDir)
  const manager = new Manager({
    defaultLocaleCode: env.VITE_DEFAULT_LOCALE_CODE,
    absWidgetsDir: path.join(rootDir, env.VITE_WIDGETS_DIR),
    absMetaFilePath: path.join(rootDir, env.VITE_META_FILE_PATH),
  })

  function widgetTree2Sidebar(widgetTrees: WidgetTree[], locale: Locale): DefaultTheme.SidebarItem[] {
    const sidebar: DefaultTheme.SidebarItem[] = []
    for (const widget of widgetTrees) {
      if (widget.type === 'widget') {
        const link = path2Url(path.relative(rootDir, widget.path)).slice(0, -5)

        sidebar.push({
          text: widget.title,
          link: manager.isDefaultLocale(locale)
            ? link
            : `${locale.code}/${link}`,
        })
      }
      else {
        sidebar.push({
          text: widget.title,
          items: widgetTree2Sidebar(widget.items, locale),
        })
      }
    }

    return sidebar
  }

  function locale2DocLocale(locale: Locale): LocaleConfig<DefaultTheme.Config>[string] {
    const { doc, name } = manager.getMeta(locale)
    const localeUrlPrefix = manager.isDefaultLocale(locale) ? '' : `/${locale.code}`

    return {
      lang: locale.code,
      label: locale.name,
      themeConfig: {
        sidebar: widgetTree2Sidebar(manager.getWidgetTrees(locale), locale),
        sidebarMenuLabel: doc.sidebarMenuLabel,
        editLink: {
          text: doc.docWidget.editLinkText,
          pattern: ({ params }) => {
            return `https://github.com/xiaohuohumax/readme-widget-hub/blob/main/${params?.edit}`
          },
        },
        notFound: {
          title: doc.notFoundTitle,
          linkText: doc.notFoundLinkText,
          quote: doc.notFoundQuote,
        },
        darkModeSwitchLabel: doc.darkModeSwitchLabel,
        outline: {
          label: doc.docWidget.outlineLabel,
        },
        footer: {
          message: `${name} (v${pkg.version}) ${pkg.license} Licensed`,
          copyright: 'Copyright © 2025 xiaohuohumax',
        },
        nav: [
          {
            text: doc.navTitle.thanks,
            link: `${localeUrlPrefix}/thanks`,
          },
        ],
      },
    }
  }

  const locales: UserConfig<DefaultTheme.Config>['locales'] = {
    root: locale2DocLocale(manager.defaultLocale),
  }

  for (const locale of manager.getLocales()) {
    if (!manager.isDefaultLocale(locale)) {
      locales[locale.code] = locale2DocLocale(locale)
    }
  }

  const meta = manager.getMeta()

  const config: UserConfig<DefaultTheme.Config> = {
    title: meta.name,
    description: meta.title,
    outDir: path.join(rootDir, 'dist/docs'),
    locales,
    base: env.VITE_DOCS_BASE_URL,
    cleanUrls: true,
    markdown: {
      config(md) {
        md.use(MarkdownItGitHubAlerts)
      },
    },
    head: [
      ['link', {
        rel: 'icon',
        href: path2Url(path.join(env.VITE_DOCS_BASE_URL, '/logo.svg')),
      }],
    ],
    vite: {
      server: {
        port: Number.parseInt(env.VITE_DOCS_SERVER_PORT),
      },
      plugins: [
        watchFiles([
          path.join(rootDir, env.VITE_WIDGETS_DIR),
          path.join(rootDir, env.VITE_META_FILE_PATH),
          path.join(rootDir, '.env'),
          path.join(rootDir, '.env.local'),
          path.join(rootDir, 'packages/render/templates'),
        ]),
      ],
    },
    themeConfig: {
      logo: '/logo.svg',
      // todo: 通过 paths 动态生成上下页
      docFooter: {
        prev: false,
        next: false,
      },
      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/xiaohuohumax/readme-widget-hub',
        },
      ],
    },
  }

  return config
})
