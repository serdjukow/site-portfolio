document.querySelectorAll('a[href^="#"]').forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault()

		const section = this.getAttribute('href').substring(1)

		if (section) {
			const yOffset = -70
			const y = document.querySelector(`.${section}`).getBoundingClientRect().top + window.pageYOffset + yOffset
			seamless.scrollTo(window, { top: y, behavior: 'smooth' })
		}
	})
})
