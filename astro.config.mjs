import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	// 替换为你的 GitHub Pages 地址
	// 格式：https://<你的用户名>.github.io/<项目仓库名>/
	site: 'https://MarsianCreator.github.io/INGRESS-GUIDE/',
	base: '/INGRESS-GUIDE', // 必须和仓库名一致，且以斜杠开头
	integrations: [
		starlight({
			title: 'INGRESS指南',
			customCss: ['./src/theme.css'],
			pagination: false,
			sidebar: [
				{ label: '游戏操作', autogenerate: { directory: 'guides' } },
				{ label: '游戏玩法', autogenerate: { directory: 'gameplay' } },
				{ label: '游戏活动', autogenerate: { directory: 'events' } },
				{ label: '名词解释', autogenerate: { directory: 'reference' } },
				{ label: '游戏数据', autogenerate: { directory: 'data' } },
			],
		}),
	],
});