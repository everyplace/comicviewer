const main = document.createElement("template");
main.innerHTML = `
  <div>
    <header id="comicheader" class="showheader">
      <button id="togglegrid" class="headerbutton">Browse other comics</button> 
      <h3 id="comictitle"></h3>
      <button id="toggleadjustments" class="headerbutton">Show adjustments</button> 
    </header>
    <aside id="grid">
      <div class="tabsystem">
        <div class="tabselectorbox">
          <menu class="tabselector">
           <li data-tabpos="alphabetic" data-tabselect>A-Z</li>
           <li data-tabpos="updated">Updated</li>
           <li data-tabpos="genre">Genre</li>
          </menu>
        </div>
        <div id="comicslist"></div>
      </div>
    </aside>
    <div id="storylines"></div>
    <section id="comicpages"></section>
    <nav id="homenav">
      <menu class="footernav-btn-group">
        <li class="footernav-btn" data-tabpos="grid" tabselector>Comics browser</li>
        <li class="footernav-btn" data-tabpos="subscriptions">Subscribed comics</li>
        <li class="footernav-btn" data-tabpos="user">User Profile</li>
        <li class="footernav-btn" data-tabpos="notifications">Notifications</li>
        <li class="footernav-btn" data-tabpos="settings">Settings</li>
      </menu>
    </nav>
    
  </div>`;

const comic = document.createElement("template");
comic.innerHTML = `
	<article class="comic-frame">
		<div class="comic-image" data-templater></div>
	</article>`;

const thumb = document.createElement("template");
thumb.innerHTML = `
	<figure class="thumb-frame">
		<span data-templater></span>
		<figcaption class="thumb-title" data-templater></figcaption>
	</figure>`;

const intro = document.createElement("template");
intro.innerHTML = `
	<div class="intro">
		<h2 class="intro-hed">
			Comic Viewer
		</h2>
		<p>
			This is a proof-of-concept web app built on top of publicly available RSS feeds. 
		</p>
		<p>
			It is not under active development, as we have no control over the app's contents. 
		</p>
		<p>
			Still, it works pretty okay, considering these comics were never formatted for phones.
			(Don't forget, you can turn it sideways…)
		</p>
		<p>
			Enjoy! 
		</p>
		<small>
			To get started, click the menu icon in the top left.
		</small>
	</div>`;

const loading = document.createElement("template");
loading.innerHTML = `
	<div class="loading">
		<h2 class="loading-hed">
			Loading content for<br/><span id="feedname" data-templater></span>...
		</h2>
		<div class="lds-dual-ring"></div>
	</div>`;

const storylines = document.createElement("template");
storylines.innerHTML = `
	<div class="storylines-frame">
    <div class="tabsystem">
      <div class="tabselectorbox mobile-only">
        <menu class="tabselector">
         <li data-tabpos="1" data-tabselect>Intro</li>
         <li data-tabpos="2">Chapters</li>
        </menu>
      </div>
      <article class="tabgroup">
        <section class="tab" data-tabpos="1" data-tabselect>
          <div class="splash-image-frame" data-templater></div>
          <h3 class="storylines-desc" data-templater></h3>
          <div class="nav-btn-box">
            <h4 class="nav-btn-hed">Start reading:</h4>
            <menu class="nav-btn-group">
              <li class="nav-btn">First page</li>
              <li class="nav-btn tabselector mobile-only" data-tabpos="2">Chapters</li>
              <li class="nav-btn">Latest page</li>
            </menu>
          </div>
        </section>
        <section class="tab" data-tabpos="2">
          <h4 class="storylines-hed desktop-only">Chapters:</h4>
          <div class="storylines-list" data-templater></div>
        </section>
      </article>
    </div>
	</div>`;

const templates = {
  main,
  comic,
  thumb,
  intro,
  loading,
  storylines,
};

const templater = (templatename, content) => {
  const tmpl =
    templates[templatename].content.firstElementChild.cloneNode(true);
  if (content) {
    content = Array.isArray(content) ? content : [content];
    tmpl.querySelectorAll("[data-templater]").forEach((tmplnode, index) => {
      if (typeof content[index] === "string") {
        tmplnode.textContent = content[index];
      } else {
        tmplnode.replaceChildren(content[index]);
      }
    });
  }
  return tmpl;
};

export { templater };
