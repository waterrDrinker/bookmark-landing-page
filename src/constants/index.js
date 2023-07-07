import { feature1, feature2, feature3 } from '../assets';
import { chrome, firefox, opera } from '../assets';

const navLinks = [
	{
		id: 'features',
		title: 'Features'
	},
	{
		id: 'pricing',
		title: 'Pricing'
	},
	{
		id: 'contact',
		title: 'Contact'
	}
]

const features = [
	{
		id: 0,
		name: 'Simple Bookmarking',
		title: 'Bookmark in one click',
		desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
		img: feature1,
	},
	{
		id: 1,
		name: 'Speedy Searching',
		title: 'Intelligent search',
		desc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
		img: feature2,
	},
	{
		id: 2,
		name: 'Easy Sharing',
		title: 'Share your bookmarks',
		desc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
		img: feature3,
	},
]

const browsers = [
	{
		title: 'Add to Chrome',
		version: 'Minimum version 62',
		icon: chrome,
	},
	{
		title: 'Add to Firefox',
		version: 'Minimum version 55',
		icon: firefox,
	},
	{
		title: 'Add to Opera',
		version: 'Minimum version 46',
		icon: opera,
	}
]

const questions = [
	{
		title: 'What is Bookmark?',
		desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
	},
	{
		title: 'How can I request a new browser?',
		desk: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
	},
	{
		title: 'Is there a mobile app?',
		desk: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
	},
	{
		title: 'What about other Chromium browsers?',
		desk: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
	},
]

export { navLinks, features, browsers, questions }