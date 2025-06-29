function startAnimationLoop() {
  let _step = () => {
    let classes = this.$refs.transitionElement.className
    let isHidden = this.$refs.transitionElement.style.display === "none"

    if (isHidden !== this.lastHidden) {
      this.log(isHidden ? 'added display: "none"' : 'removed display: "none"', 'style')
    }

    if (this.isTransitioning) {
      this.frame++
      this.log(classes)
    }

    this.lastHidden = isHidden

    requestAnimationFrame(_step)
  }
  requestAnimationFrame(_step)
}
