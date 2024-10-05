import Comment from '$lib/components/Comment.svelte';
import Doctype from '$lib/components/Doctype.svelte';
import Element from '$lib/components/Element.svelte';
import Root from '$lib/components/Root.svelte';
import Text from '$lib/components/Text.svelte';
import type { Components } from '@accuser/svelte-unist';
import type { Node, Nodes } from 'hast';

const components: Components<Nodes> = {
	comment: Comment,
	doctype: Doctype,
	element: Element,
	root: Root,
	text: Text
};

export default components as Components<Node>;
