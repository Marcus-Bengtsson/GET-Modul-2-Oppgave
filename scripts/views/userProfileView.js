function updateUserProfileView () {
    html = `
<div class="avatarImg">
<img src="https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png" alt="" onclick="selectAvatar(0)"/>
<img src="https://pickaface.net/gallery/avatar/unr_sample_170130_2257_9qgawp.png" alt="" onclick="selectAvatar(1)"/>
<img src="https://pickaface.net/gallery/avatar/unr_example_161122_0416_qss004g.png" alt="" onclick="selectAvatar(2)"/>
<img src="https://pickaface.net/gallery/avatar/acrovin559439058dc7f.png" alt="" onclick="selectAvatar(3)"/>
</div>
    `
    return html;
}
