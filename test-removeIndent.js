'use strict'

const assert = require('assert')
const { removeIndent } = require('./clubside-utils.js')

// Simple indent
assert.strictEqual(
	removeIndent('    Test'),
	'Test'
)

// Mixed indent block
const block = `
        <p>Hello</p>
        <p>World</p>
`
assert.strictEqual(
	removeIndent(block),
  `
<p>Hello</p>
<p>World</p>
`
)

// HTML indent
const html = `
            <p>A neophyte has as much chance with Defender as he would if he were to take over the controls of an F-16. A reasonably good video-game athlete--that is how game junkies are beginning to describe themselves--will last it out for a few thousand points, or a couple of minutes. A superb player, the kind not seen in every arcade, may hit 500,000 on his best day. That is why when Juraszek began to close in on 1 million points toward the end of the first hour of his enchanted run, people began to notice. Darrell Schultz, one of the arcade's owners, asked Steve if he thought he could set a record.</p>
            <p>"I said, 'Yeah,'" Juraszek recalls, "and he said, 'Go for it!'" Juraszek is a gangly young man who began playing pinball when he was ten, before video games had hit the scene. "I could buy a car or something with the money I've put into games," he says. with no appearance of regret. He started playing Defender in June, and by August he was pretty good. On his record day he kept up his strength by snapping at pizza slices that people held in front of his face. He said later that he was so excited he never even thought about going to the bathroom. His mother Joanne Juraszek watched for a while, utterly unimpressed, and agreed reluctantly to let him play till he dropped. "I just wish," she said later, "that he was this good about doing his homework."</p>
            <div class="vgp-pull-out left vgpo25">
                <img src="051b_tn.jpg" class="imageLink" data-link="2" style="border: none;">
                <div style="background: transparent; border: none;">
                    <strong>Tense combat on-screen in Pleiades game</strong>
                </div>
            </div>
            <p>As the scornful cry "So what?" echoes from glen to glen, and as the unmoved Joanne Juraszek admits that she finds her son's new fame "very strange," skeptical citizens might do well to pay attention to a peculiar clinking sound audible across the land. The noise is made by the estimated 20 billion quarters that poured last year into the arcade monsters. This is a figure that may be the public relations roar of a healthy young industry beating its chest, but one that investment analysts who specialize in the entertainment industry agree is not far wrong. While they spent this $5 billion, video-game addicts also were spending 75,000 man-years playing the machines.</p>
`
assert.strictEqual(
	removeIndent(html),
	`
<p>A neophyte has as much chance with Defender as he would if he were to take over the controls of an F-16. A reasonably good video-game athlete--that is how game junkies are beginning to describe themselves--will last it out for a few thousand points, or a couple of minutes. A superb player, the kind not seen in every arcade, may hit 500,000 on his best day. That is why when Juraszek began to close in on 1 million points toward the end of the first hour of his enchanted run, people began to notice. Darrell Schultz, one of the arcade's owners, asked Steve if he thought he could set a record.</p>
<p>"I said, 'Yeah,'" Juraszek recalls, "and he said, 'Go for it!'" Juraszek is a gangly young man who began playing pinball when he was ten, before video games had hit the scene. "I could buy a car or something with the money I've put into games," he says. with no appearance of regret. He started playing Defender in June, and by August he was pretty good. On his record day he kept up his strength by snapping at pizza slices that people held in front of his face. He said later that he was so excited he never even thought about going to the bathroom. His mother Joanne Juraszek watched for a while, utterly unimpressed, and agreed reluctantly to let him play till he dropped. "I just wish," she said later, "that he was this good about doing his homework."</p>
<div class="vgp-pull-out left vgpo25">
	<img src="051b_tn.jpg" class="imageLink" data-link="2" style="border: none;">
	<div style="background: transparent; border: none;">
		<strong>Tense combat on-screen in Pleiades game</strong>
	</div>
</div>
<p>As the scornful cry "So what?" echoes from glen to glen, and as the unmoved Joanne Juraszek admits that she finds her son's new fame "very strange," skeptical citizens might do well to pay attention to a peculiar clinking sound audible across the land. The noise is made by the estimated 20 billion quarters that poured last year into the arcade monsters. This is a figure that may be the public relations roar of a healthy young industry beating its chest, but one that investment analysts who specialize in the entertainment industry agree is not far wrong. While they spent this $5 billion, video-game addicts also were spending 75,000 man-years playing the machines.</p>
`
)

// SQL indent
const sql = `
					SELECT
						gear.name,
						gear.path,
						gear.episodeGearPermalink,
						gearItems.permalink
					FROM
						gear
						INNER JOIN gearItems ON gearItems.gearId = gear.id AND gearItems.master = 0 AND gearItems.corrupted = 0
						INNER JOIN gearTypes ON gearTypes.id = gear.gearTypeId
					WHERE
						gear.qualityId = 6
						AND gear.characterId = @characterId
						AND (gear.gearTypeId <> @gearTypeId OR gear.lookupId <> @lookupId)
					ORDER BY
						gearTypes.infamySetOrder,
						gear.lookupSlug`

assert.strictEqual(
	removeIndent(sql),
	`
SELECT
	gear.name,
	gear.path,
	gear.episodeGearPermalink,
	gearItems.permalink
FROM
	gear
	INNER JOIN gearItems ON gearItems.gearId = gear.id AND gearItems.master = 0 AND gearItems.corrupted = 0
	INNER JOIN gearTypes ON gearTypes.id = gear.gearTypeId
WHERE
	gear.qualityId = 6
	AND gear.characterId = @characterId
	AND (gear.gearTypeId <> @gearTypeId OR gear.lookupId <> @lookupId)
ORDER BY
	gearTypes.infamySetOrder,
	gear.lookupSlug`
)

console.log('removeIndent tests passed')
