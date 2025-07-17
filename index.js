const imgList = document.querySelectorAll('li')

const observer = new IntersectionObserver(
	entries => {
		console.log(entries)
		entries.forEach(entry => {
			if (entry.isIntersecting) entry.target.classList.add('visible')
			if (entry.isIntersecting) observer.unobserve(entry.target)
		})
	},
	{
		threshold: 0.3,
	}
)

imgList.forEach(img => observer.observe(img))
