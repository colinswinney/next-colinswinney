import {
	GridContainerArticleLayout,
	Article,
	Content,
	Aside,
} from "./styles/article-layout";

export default function ArticleLayout({ children, ...restProps }) {
	return (
		<GridContainerArticleLayout {...restProps}>
			{children}
		</GridContainerArticleLayout>
	);
}

ArticleLayout.Article = function ArticleLayoutArticle({
	children,
	...restProps
}) {
	return <Article {...restProps}>{children}</Article>;
};

ArticleLayout.Content = function ArticleLayoutContent({
	children,
	...restProps
}) {
	return <Content {...restProps}>{children}</Content>;
};

ArticleLayout.Aside = function ArticleLayoutAside({ children, ...restProps }) {
	return <Aside {...restProps}>{children}</Aside>;
};
