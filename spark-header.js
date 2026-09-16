class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <img src="https://teamspark.is/img/logo/SPARK_logo_white-purp.png" class="title"></img>
        <nav class="main-nav">
			<a href="#"><h1>Bílar</h1></a>
			<a href="#"><h1>Styrktaraðilar</h1></a>
			<a href="#"><h1>Liðsmenn</h1></a>
			<a href="#"><h1>Keppnir</h1></a>
			<a href="#"><h1>Fréttir</h1></a>
			<a href="#"><h1>Sækja um</h1></a>
		</nav>
      </header>
    `;
  }
}
customElements.define('spark-header', MyHeader);