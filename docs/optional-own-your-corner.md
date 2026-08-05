# Optional Assignment — Own Your Corner of the Internet

This lesson is different from every other one in this course, in two ways.

First: it's **completely optional**. Nothing later depends on it, nobody will chase you about it,
and there's no penalty for skipping it. It exists because every summer a few people finish their
site and ask the same question: *"okay, but how do the pros do it?"* This is that answer.

Second: **there's no finished code in here.** Every other lesson handed you something to paste and
then explained it. This one explains everything and hands you nothing — you get the full picture of
how it works and why, and then you write the code yourself. You will get stuck. That's not a flaw in
the lesson; that's the lesson. Wrestling with a problem you understand but haven't solved yet is
what the actual job feels like, and you're ready for a taste of it.

> ⭐ **You've graduated from following instructions. This is the tier where you get a goal and a map,
> and the route is yours to find.**

---

## The big picture — my setup vs. yours

You've seen my site in class: **camdjackson.com**. Here's what actually happens when someone opens
it, next to what happens when someone opens yours:

```
My site:      Browser ──▶ Cloudflare (DNS: "which computer is camdjackson.com?")
                              │
                              ▼
                          Azure Storage (the actual HTML/CSS/JS files)
```

```
Your site:    Browser ──▶ GitHub Pages (DNS and files, all handled for you)
```

Mine has one more moving part behind the scenes: a **GitHub Actions pipeline**. When I push to
`main`, an automatic process copies my files to Azure and the live site updates — push to main,
site goes live. Sound familiar? It should. **That's exactly what `git save` already does for you
with GitHub Pages.** You've been running a professional deployment loop since Lesson 9; mine just
has more parts I chose and pay for myself.

Same idea, different budget. Now the four words that make the diagram make sense:

**Registrar.** The company you buy a domain name from. You don't really "own" a domain — you rent
it by the year, and the registrar is who you rent it from. I use Cloudflare; Namecheap and Porkbun
are other well-known ones.

**DNS (Domain Name System).** The internet's phone book. Computers find websites by number (an IP
address), but humans type names. DNS is the worldwide system that answers "camdjackson.com? That's
over at *this* address." Every site you've ever visited started with a DNS lookup you never saw.

**A and CNAME records.** The individual entries in that phone book, and you write them yourself.
An **A record** says "this name points at this exact IP address number." A **CNAME record** says
"this name is just an alias — go look up this *other name* instead." Pointing a domain at GitHub
Pages is nothing more than writing a few of these correctly.

**HTTPS certificate.** The padlock in the address bar. It's a file that proves your site is really
your site and encrypts traffic to it, and it's issued by an authority the browser already trusts.
GitHub Pages creates one for your domain automatically — you just have to switch it on.

---

## Part A — The print-ready resume (free, and everyone can do this)

Here's a professional secret: my resume page has a **Print** button, and when you use it, the page
doesn't print like a webpage. The navigation disappears, the dark background vanishes, and out comes
a clean, black-on-white paper resume — from the *same HTML* you see in the browser. One page, two
outfits.

**Your challenge: make your resume page do that.**

The concept is one you already know. In Lesson 15 you saw your layout change with screen size —
`md:` meant "only on medium screens and up." That's a **media query**: a condition wrapped around
styles. Screens are one medium. **Paper is another.** CSS has a print medium built in, and any rule
you put behind it applies only when the page is being printed. In plain CSS that condition is
written `@media print`; in Tailwind, the same idea is the `print:` prefix, which works exactly like
`md:` does.

Where you write it depends on where your page lives — you know this split from Lesson 9:

- Page is `template/index.html` → your print rules belong in `style.css`.
- Page is in `template/layouts/` → use Tailwind's `print:` classes right in your HTML, or add a
  `<style>` block. Your choice — researching which you prefer is part of the assignment.

For the button: browsers give JavaScript a built-in function called **`window.print()`** that opens
the print dialog — that's the entire secret behind every "Print" button on the internet. You wired
a button to a function in Lesson 5, and your own code goes below the `ONLY ADD YOUR OWN CODE BELOW
THIS LINE` banner in `script.js`. That's all the hinting you get.

Now, what *should* change on paper? Think like a hiring manager holding the printout:

- **Navigation, buttons, and anything clickable-only should disappear** — including the Print
  button itself. A button on paper is furniture nobody can use.
- **Dark backgrounds go.** Paper is white; ink costs money. Dark mode on paper is a puddle.
- **Text should read like a document** — comfortable serif sizing beats screen-sized display text.
- **Links should show their URLs.** On screen, "My Project" is clickable. On paper it's a dead
  phrase unless the address is printed next to it. (This one is genuinely tricky — search for how
  CSS can add content after a link when printing. That search is the assignment working.)

**Check your work without wasting paper:** press `Ctrl+P` in your browser. The print preview shows
exactly what would come out of a printer, live — it's the dev-tools of paper. Keep it open, change
your CSS, save, and preview again.

> ⭐ **Same content, different medium, styled on purpose.** Responsive design isn't just phones vs.
> laptops — it's *every* place your page might land, including a sheet of paper in an interviewer's
> hand.

**Part A is done when:** clicking your Print button opens the print dialog, and the preview shows a
clean one-or-two-page paper resume — no nav, no buttons, no dark background, links readable.

Take a screenshot of your print preview and save it as `progress-screenshots/5-print.png`. Line it
up next to `4-resume.png` — same resume, screen and paper, both yours.

Then save your work the usual way:

**▶ Try it**
```
git add .
```

**▶ Try it**
```
git commit -m "Print-ready resume"
```

**▶ Try it**
```
git save
```

---

## Part B — The custom domain (costs real money, 100% optional)

Let's be honest before anything else. A domain name costs about **$10–15 per year**, it **renews
every year** until you cancel it, the program is **not** paying for it, and buying one requires a
payment method — which means a **parent or guardian has to be involved and agree**. If any of that
is a no, do the zero-cost version below instead — it covers all the same ground, and it's the
version most people should start with anyway.

If it's a yes, the path from `your-username.github.io/your-repo` to `yourname.com` is four steps:

1. **Buy the domain at a well-known registrar** (Cloudflare, Namecheap, Porkbun). Just the domain.
2. **Write the DNS records** at that registrar pointing your new name at GitHub Pages — this is the
   A/CNAME work from the big picture, for real.
3. **Tell GitHub about it:** your repo → Settings → Pages → Custom domain.
4. **Turn on Enforce HTTPS** once GitHub issues your certificate (it can take a little while).

I'm deliberately not restating the exact records here, because GitHub keeps the official
instructions current and reading real documentation is a skill this lesson is teaching:

**https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site**

That page is written for working developers, not students — and you can handle it now. Read it
slowly, and notice it answers the questions this lesson already gave you the words for.

### The zero-cost version (all the thinking, none of the spending)

Window-shop it. No purchase, no card, no parent required:

1. **Choose the domain you'd actually want.** Your name? A brand? Check that you'd still like it in
   five years.
2. **Look up whether it's available and what it really costs** — registrars show this for free.
   Check the *renewal* price, not just the first-year teaser price. Write both down.
3. **Using GitHub's doc linked above, write out the exact DNS records you would create** — type,
   name, value — and one sentence each on what that record does.

Do that in a new file: `docs/scratch/my-domain-plan.md`. If you ever do buy the domain — this
summer or in three years — that file is your complete instruction sheet, written by you.

---

## The guardrails (non-negotiable)

Real money and real accounts are involved in Part B, so these are rules, not suggestions:

- **Buy nothing except the domain itself.** At checkout, registrars will offer hosting, email,
  site builders, and "protection" add-ons. Decline every single one. Your hosting is GitHub Pages
  and it's free; most registrars include the privacy protection that matters at no charge.
- **Well-known registrars only** — the names in this lesson are safe picks. If a site you've never
  heard of offers a suspiciously cheap domain, that's the bait, not the deal.
- **Never enter card details without a parent or guardian right there.** Not once, not "just to
  check the price." Prices are visible without paying.
- **Do not try to recreate my Azure setup.** Cloud accounts like Azure and AWS can generate real,
  surprisingly large bills from small mistakes — that's why they're a "grown-up version." GitHub
  Pages is not the training wheels; for a site like yours it's the *right* tool, and plenty of
  professionals use exactly it.

---

## If it didn't work

**The print preview still shows my dark background.**
Two suspects. Browsers skip printing backgrounds by default — look in the print dialog for a
"background graphics" checkbox. If it's not that, your print styles may be losing to your normal
ones: use the Lesson 14 dev tools on the preview mindset — check which rule is winning, and search
how a print rule can take priority.

**My Print button does nothing at all.**
The Lesson 5 checklist applies exactly: is the button's `id` in the HTML spelled identically in
your JavaScript? Is your code below the `ONLY ADD YOUR OWN CODE BELOW THIS LINE` banner? Open the
Console (`F12`) — a red error naming a line is the answer, not a punishment.

**I set up my domain but it doesn't load / shows "not secure."**
DNS is a worldwide phone book — updates take time to spread, from minutes to a day. Wait, then
re-check. The HTTPS certificate can only be issued *after* DNS settles, so "not secure" usually
just means "too early." GitHub's doc has a troubleshooting section for exactly this.

> **Still stuck?** Nothing here blocks anything — this whole lesson is optional. Park it, keep the
> parts that worked, and come back with fresh eyes. An unfinished attempt still taught you more
> than never starting.

---

## When you get stuck (and you will)

Read the error out loud. Ask a classmate. Google the exact message.

Googling an error and reading the answers is the actual skill — every professional developer does it
daily, all day. Getting stuck isn't a sign you're behind. It's the job.

---

## Definition of done

**Part A — print-ready resume:**
- [ ] A Print button on your resume page that opens the print dialog
- [ ] Print preview shows a clean paper resume: no nav or buttons, no dark background, readable text
- [ ] Links show their URLs on paper
- [ ] `progress-screenshots/5-print.png` saved, work committed with `git save`

**Part B — custom domain (either path counts):**
- [ ] *Bought it:* your site loads at your own domain, with the padlock, **or**
- [ ] *Window-shopped it:* `docs/scratch/my-domain-plan.md` with your chosen domain, its real price
      and renewal price, and the exact DNS records you'd create with one sentence each

---

## Before you move on

Add a few sentences to `reflections.md` — and this time, add the heading yourself: put
`## Own Your Corner` at the bottom of the file. It's your file; you've earned the right to extend
it.

*What was different about working without the code being handed to you? Where did you get stuck,
and what got you unstuck? If you window-shopped a domain — which one, and why that one?*

**Done looks like:** you can explain to someone what a registrar, DNS, and an HTTPS certificate are
in your own words, your resume prints like it means business, and you know exactly what it would
take — in steps and in dollars — to own your corner of the internet.

There's no "next up" after this one. This is the part of the map where the lessons end and you keep
going anyway — which was the point all along.
