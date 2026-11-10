
import './style.css'

// ==========================================
// PEMUTAR MUSIK LATAR
// ==========================================

const backgroundMusic = new Audio("/music/birthday-song.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.3;

function startBackgroundMusic() {
  if (!backgroundMusic.paused) return;

  backgroundMusic.play().catch((error) => {
    console.error("Musik gagal diputar:", error);
  });
}

document.querySelector('#app').innerHTML = `
  <main class="min-h-screen flex items-center justify-center bg-[#F5EAFB] px-6 py-12">

    <section class="max-w-2xl w-full text-center fade-in-up">

      <!-- Label kecil -->
      <p class="text-sm tracking-[0.3em] text-purple-500 mb-5">
        A SPECIAL DAY FOR YOU
      </p>

      <!-- Foto SHEAA dengan Bingkai Lavender -->
        <div class="flex justify-center mb-8">
          <div class="photo-frame-stage photo-appear">

      <!-- Foto utama -->
        <img
          src="/images/Shea1.jpeg"
          alt="Foto SHEAA"
          class="portrait-photo"
        />

      <!-- Bingkai transparan -->
        <img
          src="/images/frame-lavender.png"
          alt=""
          class="photo-frame-overlay"
        >

      </div>
    </div>

      <!-- Judul -->
      <h1 class="text-3xl sm:text-5xl font-bold text-purple-800 mb-4">
        Happy 22nd Birthday!
      </h1>

      <h2 class="text-2xl text-purple-500 italic mb-6">
        Dear, SHEAA ♡
      </h2>

      <!-- Ucapan -->
      <p class="max-w-lg mx-auto text-gray-600 leading-relaxed mb-8">
        Hari ini adalah tentang kamu.
        Tentang bertambahnya usia, cerita baru,
        dan segala hal indah yang semoga selalu
        hadir dalam perjalanan hidupmu.
      </p>

      <!-- Tombol -->
      <button
        id="start-button"
        class="bg-purple-600 hover:bg-purple-700 text-white
        px-8 py-3 rounded-full shadow-lg
        transition duration-300 hover:scale-105"
      >
        Mulai Petualangan ♡
      </button>

      <p class="text-xs text-purple-400 mt-10">
        A little page made with love, just for you.
      </p>

    </section>
  </main>
`
// ==========================================
// WATERCOLOUR FLOATING BALLOONS
// Dekorasi balon melayang untuk birthday page
// ==========================================

const mainPage = document.querySelector("#app > main");

if (mainPage && !mainPage.querySelector(".balloon-layer")) {
  const balloonLayer = document.createElement("div");

  balloonLayer.className = "balloon-layer";
  balloonLayer.setAttribute("aria-hidden", "true");

  // Konfigurasi setiap balon
  const balloonSettings = [
    { left: "5%", delay: "0s", duration: "16s", scale: "0.85", drift: "18px" },
    { left: "17%", delay: "4s", duration: "19s", scale: "0.65", drift: "-15px" },
    { left: "30%", delay: "8s", duration: "15s", scale: "0.75", drift: "20px" },
    { left: "45%", delay: "2s", duration: "18s", scale: "0.9", drift: "-18px" },
    { left: "60%", delay: "6s", duration: "17s", scale: "0.7", drift: "16px" },
    { left: "73%", delay: "10s", duration: "19s", scale: "0.85", drift: "-20px" },
    { left: "85%", delay: "3s", duration: "15s", scale: "0.65", drift: "14px" },
    { left: "95%", delay: "7s", duration: "18s", scale: "0.8", drift: "-16px" }
  ];

  // Membuat elemen balon secara otomatis
  balloonSettings.forEach((settings) => {
    const balloon = document.createElement("span");

    balloon.className = "watercolor-balloon";

    balloon.style.setProperty("--left", settings.left);
    balloon.style.setProperty("--delay", settings.delay);
    balloon.style.setProperty("--duration", settings.duration);
    balloon.style.setProperty("--scale", settings.scale);
    balloon.style.setProperty("--drift", settings.drift);

    balloonLayer.appendChild(balloon);
  });

  // Memasukkan dekorasi ke dalam halaman utama
  mainPage.prepend(balloonLayer);
}

// ==========================================
// FUNGSI BALON MELAYANG
// Digunakan pada halaman kedua dan halaman berikutnya
// ==========================================

function addFloatingBalloons(targetPage) {
  // Mencegah balon dibuat lebih dari satu kali
  if (!targetPage || targetPage.querySelector(".balloon-layer")) return;

  const balloonLayer = document.createElement("div");
  balloonLayer.className = "balloon-layer";
  balloonLayer.setAttribute("aria-hidden", "true");

  const balloonSettings = [
    { left: "5%", delay: "0s", duration: "16s", scale: "0.85", drift: "18px" },
    { left: "17%", delay: "4s", duration: "19s", scale: "0.65", drift: "-15px" },
    { left: "30%", delay: "8s", duration: "15s", scale: "0.75", drift: "20px" },
    { left: "45%", delay: "2s", duration: "18s", scale: "0.9", drift: "-18px" },
    { left: "60%", delay: "6s", duration: "17s", scale: "0.7", drift: "16px" },
    { left: "73%", delay: "10s", duration: "19s", scale: "0.85", drift: "-20px" },
    { left: "85%", delay: "3s", duration: "15s", scale: "0.65", drift: "14px" },
    { left: "95%", delay: "7s", duration: "18s", scale: "0.8", drift: "-16px" }
  ];

  balloonSettings.forEach((settings) => {
    const balloon = document.createElement("span");
    balloon.className = "watercolor-balloon";

    balloon.style.setProperty("--left", settings.left);
    balloon.style.setProperty("--delay", settings.delay);
    balloon.style.setProperty("--duration", settings.duration);
    balloon.style.setProperty("--scale", settings.scale);
    balloon.style.setProperty("--drift", settings.drift);

    balloonLayer.appendChild(balloon);
  });

  // Balon diletakkan di belakang konten halaman
  targetPage.prepend(balloonLayer);
}

// ==========================================
// HALAMAN KEDUA - BIRTHDAY CAKE
// ==========================================

function renderBirthdayPage() {
  const app = document.querySelector("#app");

  app.classList.remove("page-enter");
  app.classList.add("page-transition");

  setTimeout(() => {
    app.innerHTML = `
      <main class="birthday-page">

        <!-- Balon dibuat otomatis melalui JavaScript -->

        <!-- Dekorasi bintang -->
        <div class="birthday-sparkles" aria-hidden="true">
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
        </div>

        <!-- Konten utama halaman kedua -->
        <section class="birthday-content">

          <p class="birthday-label">
            A LITTLE WISH FOR YOU
          </p>

          <h1 class="birthday-title">
            Make a Wish, SHEAA!
          </h1>

          <p class="birthday-subtitle">
            Satu lilin, sejuta harapan untukmu ♡
          </p>

          <!-- Kue dan lilin -->
          <div class="birthday-cake-wrapper">

            <img
              src="/images/kue-ultah.png"
              alt="Kue ulang tahun lavender untuk SHEAA"
              class="birthday-cake"
            />

            <!-- Lima lilin ulang tahun -->
            <div class="birthday-candles" aria-label="Lima lilin ulang tahun">

              <div class="birthday-candle">
                <span class="candle-flame"></span>
                <span class="candle-smoke"></span>
              </div>

              <div class="birthday-candle">
                <span class="candle-flame"></span>
                <span class="candle-smoke"></span>
              </div>

              <div class="birthday-candle">
                <span class="candle-flame"></span>
                <span class="candle-smoke"></span>
              </div>

              <div class="birthday-candle">
                <span class="candle-flame"></span>
                <span class="candle-smoke"></span>
              </div>

              <div class="birthday-candle">
                <span class="candle-flame"></span>
                <span class="candle-smoke"></span>
              </div>

            </div>
          </div>

          <h2 class="birthday-greeting">
            Happy 22nd Birthday, SHEAA! ♡
          </h2>

          <p class="birthday-instruction">
            Pejamkan mata, buat satu harapan,
            lalu tiup lilinnya.
          </p>

          <!-- Tombol meniup lilin -->
          <button
            type="button"
            id="blow-candles-button"
            class="blow-candles-button"
          >
            Tiup Lilinnya ♡
          </button>

          <p class="birthday-footer">
            May your wishes bloom like lavender.
          </p>

          <!-- Doa muncul setelah lilin padam -->
          <section
            id="birthday-wish"
            class="birthday-wish"
            hidden
            aria-live="polite"
          >
            <h2>Doa dan Harapan untukmu ♡</h2>

            <p>
              Semoga di usia yang baru ini, kamu selalu diberi
              kesehatan, kebahagiaan, dan kemudahan dalam setiap
              langkah. Semoga semua impianmu satu per satu menjadi
              nyata, dikelilingi orang-orang baik, dan selalu punya
              alasan untuk tersenyum.
            </p>

            <p class="birthday-wish-signature">
              Tetaplah menjadi SHEAA yang istimewa ♡
            </p>
          </section>

          <!-- Navigasi halaman kedua -->
          <div class="birthday-navigation">

            <button
              type="button"
              id="birthday-back-button"
              class="birthday-back-button"
            >
              ← Kembali
            </button>

            <button
              type="button"
              id="birthday-next-button"
              class="birthday-next-button"
            >
              Selanjutnya →
            </button>

          </div>

        </section>
      </main>
    `;

    // ======================================
    // DEKORASI BALON HALAMAN KEDUA
    // ======================================

    const birthdayPage = app.querySelector(".birthday-page");
    addFloatingBalloons(birthdayPage);

    // ======================================
    // INTERAKSI TOMBOL TIUP LILIN
    // ======================================

    const blowButton = app.querySelector("#blow-candles-button");
    const wishSection = app.querySelector("#birthday-wish");

    blowButton.addEventListener("click", () => {
      birthdayPage.classList.add("candles-blown");
      wishSection.hidden = false;

      blowButton.textContent = "Selamat Ulang Tahun, SHEAA! ♡";
      blowButton.disabled = true;
    });

    // ======================================
    // TOMBOL KEMBALI KE HALAMAN PERTAMA
    // ======================================

    const backButton = app.querySelector("#birthday-back-button");

    backButton.addEventListener("click", () => {
      window.location.reload();
    });

    // ======================================
    // TOMBOL MENUJU HALAMAN KETIGA
    // ======================================

    const nextButton = app.querySelector("#birthday-next-button");

      nextButton.addEventListener("click", () => {
      renderLetterPage();
    });

    // ======================================
    // ANIMASI MASUK HALAMAN
    // ======================================

    requestAnimationFrame(() => {
      app.classList.remove("page-transition");
      app.classList.add("page-enter");
    });

  }, 250);
}


// ==========================================
// HALAMAN KETIGA - LETTER FOR SHEAA
// ==========================================

function renderLetterPage() {
  const app = document.querySelector("#app");

  app.classList.remove("page-enter");
  app.classList.add("page-transition");

  setTimeout(() => {
    app.innerHTML = `
      <main class="letter-page">

        <div class="letter-sparkles" aria-hidden="true">
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
        </div>

        <section class="letter-content">

          <p class="letter-label">A LITTLE LETTER FOR YOU</p>

          <h1 class="letter-title">
            Dear, SHEAA ♡
          </h1>

          <p class="letter-subtitle">
            Ada sesuatu yang ingin aku ceritakan...
          </p>

          <!-- Amplop menggunakan gambar -->
          <div class="letter-envelope-area" id="letter-envelope-area">

            <button
              type="button"
              id="open-letter-button"
              class="letter-envelope"
              aria-label="Buka surat untuk SHEAA"
            >
              <img
                src="/images/amplop-lavender-shea.png"
                alt="Amplop lavender dengan pita untuk SHEAA"
                class="letter-envelope-image"
              />

              <span class="envelope-message">
                <strong>A Little Letter for You</strong>
                <small>Klik surat ini untuk membaca pesan kecil dariku ♡</small>
              </span>
            </button>

            <p class="letter-quote">
              Sebenarnya aku cuma mau bilang beberapa hal sederhana. 
              Tapi karena otakku punya kebiasaan mengembangkan satu cerita menjadi beberapa episode, 
              akhirnya jadilah surat ini. Selamat membaca hasil rapat antara hati dan pikiran random-ku.. ♡
            </p>

          </div>

          <!-- Isi surat -->
          <article class="letter-paper" id="letter-paper" hidden>

            <div class="letter-paper-inner">

              <p class="letter-greeting">Hai, SHEAA!</p>

              <!-- Paragraf 1 -->
              <p>
                Selamat ulang tahun yang ke-22! Hahaha, nggak terasa ya,
                kita sudah berteman sejauh ini. Tapi sampai sekarang aku
                masih punya satu pertanyaan besar untuk semesta,
                KENAPA BARU DIPERTEMUKAN DI AKHIR SEMESTER 4?!
              </p>

              <!-- Paragraf 2 -->
              <p>
                Kenapa nggak dari semester 1 aja, sih? Apa semesta waktu
                itu lagi sibuk mengurus urusan lain sampai lupa
                mempertemukan dua manusia ini? Coba kalau dari dulu
                sudah kenal, mungkin cerita kita sudah lebih banyak.
                Tapi nggak apa-apa, yang penting sekarang sudah ketemu.
                Walaupun agak telat, setidaknya bukan telat bayar UKT.
              </p>

              <!-- Paragraf 3 -->
              <p>
                Jujur, aku senang banget bisa kenal kamu. Ternyata
                menyenangkan juga punya teman yang kalau diajak bicara
                mau mendengarkan, nggak cuma mendengar sambil menunggu
                giliran bicara. Terima kasih sudah mau mendengarkan
                segala macam cerita random-ku, memberikan pendapat,
                dan feedback yang baik.
              </p>

              <!-- Paragraf 4 -->
              <p>
                Senang punya teman belajar,
                teman diskusi, teman mencari solusi ketika tugas mulai
                bertingkah seperti punya dendam pribadi kepada kita.
                Kalau ada masalah, kita pikirkan bareng. Kalau belum
                ketemu solusi, ya kita pikirkan lagi sampai ketemu.
                Pokoknya jangan sampai tugas kuliah menang melawan kita.
                Harga diri mahasiswa harus tetap dijaga. 😭
              </p>

              <!-- Paragraf 5 -->
              <p>
                Terus, ada satu jasa besar kamu yang sepertinya belum
                pernah masuk penghargaan mana pun, yaitu BERHASIL
                MEMPERLUAS WAWASAN PERJAJANANKU! SHEAA, BAYANGKAN!
                Semester 1 sampai 3 hidupku cuma mengenal somay dan
                batagor langganan depan SD. Sesekali ke Indomaret,
                itu pun jajannya masih muter di produk yang sama.
                TIGA SEMESTER AKU HIDUP BEGITU SAJA! 😭
              </p>

              <!-- Paragraf 6 -->
              <p>
                Aku kira dunia jajanan memang cuma sebatas itu. Lalu
                datanglah kamu membawa pengetahuan baru tentang berbagai
                macam jajanan. Sejak saat itu, niat menabungku mulai
                mengalami gangguan. Katanya mau menyisihkan uang, tetapi
                kok malah disisihkan untuk membeli makanan? Tabungan
                boleh kosong, yang penting perut tidak merasa diabaikan.
              </p>

              <!-- Paragraf 7 -->
              <p>
                Terima kasih juga karena kamu orangnya pengertian,
                suka traktir, bahkan kasih aku voucher seblak. Jujur,
                voucher seblak itu bukan sekadar voucher, itu adalah
                bentuk kasih sayang yang bisa dimakan.
              </p>

              <!-- Paragraf 8 -->
              <p>
                Semoga rezekimu selalu lancar, sehat terus, panjang umur,
                urusannya dimudahkan, dan tentunya makin banyak duitnya!
                Semoga dompetmu selalu tebal, rekeningmu tidak mengenal
                kata sekarat, dan suatu hari nanti bisa naik haji. AAMIIN!
                Ini doa yang sangat tulus, terutama untuk bagian banyak
                duitnya. Hihihi.
              </p>

              <!-- Paragraf 9 -->
              <p>
                Pokoknya, selamat bertambah usia, SHEAA! Semoga hal-hal
                baik selalu datang menghampirimu, semua yang sedang kamu
                usahakan diberi kemudahan, dan semoga kamu selalu
                dikelilingi orang-orang baik. Jangan lupa istirahat,
                jangan terlalu keras sama diri sendiri, dan tetap jadi
                SHEAA yang menyenangkan.
              </p>

              <!-- Paragraf 10 -->
              <p>
                Semoga kita masih punya banyak
                kesempatan untuk belajar bareng, mengerjakan tugas bareng,
                cerita-cerita, dan tentu saja menemukan jajanan baru yang
                bisa menguji ketahanan isi dompet. Terima kasih sudah hadir
                di cerita pertemananku. Senang sekali bisa kenal kamu.
                Jangan berubah jadi alien, ya. Kalau berubah pun, kabari
                dulu biar aku nggak kaget.
              </p>

              <div class="letter-signature">
                <p>With love,</p>
                <p class="letter-signature-name">
                  Dari temanmu yang paling cantik seduniaaaa ♡
                </p>
              </div>

              <div class="letter-close-area">
                <button
                  type="button"
                  id="close-letter-button"
                  class="letter-close-button"
                >
                  Tutup Surat ♡
                </button>
              </div>

            </div>
          </article>

          <!-- Navigasi -->
          <div class="birthday-navigation">

            <button
              type="button"
              id="letter-back-button"
              class="birthday-back-button"
            >
              ← Kembali
            </button>

            <button
              type="button"
              id="letter-next-button"
              class="birthday-next-button"
            >
              Selanjutnya →
            </button>

          </div>

        </section>
      </main>
    `;

    // Balon halaman ketiga
    const letterPage = app.querySelector(".letter-page");
    addFloatingBalloons(letterPage);

    // Membuka surat
    const openLetterButton = app.querySelector("#open-letter-button");
    const letterEnvelopeArea = app.querySelector("#letter-envelope-area");
    const letterPaper = app.querySelector("#letter-paper");

    openLetterButton.addEventListener("click", () => {
      letterEnvelopeArea.classList.add("envelope-opened");

      setTimeout(() => {
        letterEnvelopeArea.hidden = true;
        letterPaper.hidden = false;
        letterPaper.classList.add("letter-paper-visible");
      }, 500);
    });

    // Menutup surat dan kembali ke amplop
        const closeLetterButton = app.querySelector("#close-letter-button");

        closeLetterButton.addEventListener("click", () => {
          letterPaper.classList.remove("letter-paper-visible");
          letterPaper.hidden = true;
          letterEnvelopeArea.hidden = false;
          letterEnvelopeArea.classList.remove("envelope-opened");
    });

    // Kembali ke halaman kue
    const backButton = app.querySelector("#letter-back-button");

    backButton.addEventListener("click", () => {
      renderBirthdayPage();
    });

    // Menuju halaman keempat
    const nextButton = app.querySelector("#letter-next-button");

    nextButton.addEventListener("click", () => {
      renderGalleryPage();
    });

    // Animasi masuk halaman
    requestAnimationFrame(() => {
      app.classList.remove("page-transition");
      app.classList.add("page-enter");
    });

  }, 250);
}


// ==========================================
// HALAMAN KEEMPAT - LAVENDER MEMORY GALLERY
// ==========================================

function renderGalleryPage() {
  const app = document.querySelector("#app");

  app.classList.remove("page-enter");
  app.classList.add("page-transition");

  setTimeout(() => {
    

const galleryItems = Array.from(
  { length: 10 },
  (_, index) => ({
    id: index + 1,


photo: index === 0
  ? "/images/foto1.jpeg"
  : index === 1
    ? "/images/foto2.jpeg"
    : index === 2
      ? "/images/foto3.jpeg"
      : index === 3
        ? "/images/Shea1.jpeg"
        : index === 4
          ? "/images/foto5.jpeg"
          : index === 5
            ? "/images/foto6.jpeg"
            : index === 6
              ? "/images/foto7.jpeg"
              : index === 7
                ? "/images/foto8.jpeg"
              : index === 8
                ? "/images/foto9.jpeg"
                : index === 9
                  ? "/images/foto10.jpeg"
                  : "/images/Shea1.jpeg",

title: index === 0
  ? "Koboi Kesasar 🤠"
  : index === 1
    ? "Pemateri Dadakan 🎤"
    : index === 2
      ? "Sok Berwibawa 🎓"
      : index === 3
        ? "Terlalu Fotogenik 📸✨"
      : index === 4
        ? "Agen Rahasia Pink 🕶️🐷"
        : index === 5
          ? "Rapat Tingkat Tinggi 💻"
          : index === 6
            ? "Bidadari Turun ke Kamar 🧚‍♀️"
              : index === 7
                ? "Putri Penjaga Hutan 🌳"
                : index === 8
                  ? "Doa Anti Putus Nyambung 💗"
                  : index === 9
                    ? "Stok Kecantikan Nasional 💅"
          : `A Little Memory ${String(index + 1).padStart(2, "0")}`,

description: index === 0
  ? "Niatnya foto estetik, malah jadi dua koboi "
    + "tersesat di hutan bambu 🤠🤣"

  : index === 1
    ? "Dulu sibuk mengeluh soal makalah, sekarang "
      + "malah jadi pemateri. Plot twist! 😭🎤"

    : index === 2
      ? "ternyata kita pernah terlihat "
        + "berwibawa juga. Langka sekali! 🤣"

      : index === 3
        ? "ini kamera yang bekerja sama atau "
          + "memang kamu terlalu fotogenik? 😭💗"

        : index === 4
          ? "identitas kita harus dirahasiakan! "
            + "Misi rahasia dimulai. 😎🐷"

        : index === 5
          ? "kita serius banget ya kayak "
            + "lagi rapat perusahaan 😭🤣"

        : index === 6
          ? "ini mau foto biasa atau sedang menguji "
            + "kemampuan kamera menangkap keindahan? 😭 "
            + "Sekali jepret langsung layak masuk galeri "
            + "kerajaan. 👑✨"

        : index === 7
          ? "sepertinya kita sudah resmi menjadi "
            + "penghuni hutan bambu. Tinggal menunggu "
            + "peri datang membawa surat undangan "
            + "dari kerajaan. 😭🧚‍♀️"

        : index === 8
        ? "Semoga kalian terus bersama sampai lupa "
          + "caranya berpisah. Kalau ada masalah, "
          + "semoga yang putus cuma koneksi internet, "
          + "bukan hubungan kalian. 😭💞"

        : index === 9
          ? "Shea, tolong sisakan sedikit pesona untuk "
            + "orang lain. Jangan dihabiskan sendiri, "
            + "nanti dunia kehabisan stok. 🤣💗"

          : "Kenangan kecil yang selalu punya cerita. ♡"
  })
);

    app.innerHTML = `
      <main class="gallery-page">

        <div class="gallery-sparkles" aria-hidden="true">
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
        </div>

        <section class="gallery-content">

          <p class="gallery-label">OUR LITTLE MEMORIES</p>

          <h1 class="gallery-title">
            Galery Kitaa ♡
          </h1>

          <p class="gallery-subtitle">
            Beberapa potongan cerita yang ingin kusimpan.
          </p>

          <p class="gallery-instruction">
            Sentuh setiap bingkai dan temukan sesuatu di baliknya♡
          </p>

          <!-- Kumpulan 10 bingkai foto -->
          <div class="gallery-grid">

            ${galleryItems.map((item) => `
              <button
                type="button"
                class="gallery-card"
                data-gallery-id="${item.id}"
                aria-label="Buka kenangan ${item.id}"
              >
                <div class="gallery-card-inner">

                  <!-- Sisi depan -->
                  <div class="gallery-card-front">

                    <img
                      src="${item.photo}"
                      alt="Foto kenangan ${item.id}"
                      class="gallery-photo"
                    />

                    <img
                      src="/images/frame-gallery-lavender.png"
                      alt="Bingkai galeri lavender"
                      class="gallery-frame-overlay"
                    />

                    <span class="gallery-photo-number">
                      MEMORY ${String(item.id).padStart(2, "0")}
                    </span>

                  </div>

                  <!-- Sisi belakang -->
                  <div class="gallery-card-back">

                    <span class="gallery-back-decoration">♡</span>

                    <h2>${item.title}</h2>

                    <p>${item.description}</p>

                  </div>

                </div>
              </button>
            `).join("")}

          </div>

          <p class="gallery-footer">
            Some moments deserve to be remembered forever. ♡
          </p>

          <!-- Navigasi -->
          <div class="birthday-navigation gallery-navigation">

            <button
              type="button"
              id="gallery-back-button"
              class="birthday-back-button"
            >
              ← Kembali
            </button>

            <button
              type="button"
              id="gallery-next-button"
              class="birthday-next-button"
            >
              Selanjutnya →
            </button>

          </div>

        </section>
      </main>
    `;

    // Balon halaman galeri
    const galleryPage = app.querySelector(".gallery-page");
    addFloatingBalloons(galleryPage);

    // Efek flip setiap bingkai
    const galleryCards = app.querySelectorAll(".gallery-card");

    galleryCards.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
      });
    });

    // Kembali ke halaman surat
    const backButton = app.querySelector("#gallery-back-button");

    backButton.addEventListener("click", () => {
      renderLetterPage();
    });

    // Menuju halaman kelima - Kuis SHEAA
      const nextButton = app.querySelector("#gallery-next-button");

      nextButton.addEventListener("click", () => {
      renderQuizPage();
    });

    // Animasi masuk halaman
    requestAnimationFrame(() => {
      app.classList.remove("page-transition");
      app.classList.add("page-enter");
    });

  }, 250);
}


// ==========================================
// HALAMAN KELIMA - SHEAA'S LITTLE CHALLENGE
// ==========================================

// Status kelulusan kuis untuk membuka halaman hadiah
let hasPassedQuiz = false;

// Bank 10 pertanyaan kuis
const quizQuestions = [
  // KATEGORI PERSONAL
  {
    category: "Seberapa Kenal SHEA ke Aku?",
    question: "Kalau mendapat uang tambahan, kemungkinan besar aku akan menggunakannya untuk apa?",
    options: [
      "Membeli makanan kesukaan",
      "Membeli barang yang sudah lama diinginkan",
      "Menabung",
      "Membeli sesuatu untuk orang tersayang"
    ],
    answer: 1
  },
  {
    category: "Seberapa Kenal SHEA ke Aku?",
    question: "Apa yang paling menggambarkan kepribadianku?",
    options: [
      "Ambisius dan pantang menyerah",
      "Santai dan tidak suka banyak pikiran",
      "Pemalu dan sulit bergaul",
      "Cueknya tidak tertolong"
    ],
    answer: 0
  },
  {
    category: "Seberapa Kenal SHEA ke Aku?",
    question: "Kalau aku sedang marah, bagaimana biasanya sikapku?",
    options: [
      "Langsung mengungkapkan semuanya",
      "Diam dan memilih menjauh",
      "Menangis karena kesal",
      "Tetap bercanda seolah tidak terjadi apa-apa"
    ],
    answer: 2
  },
  {
    category: "Seberapa Kenal SHEA ke Aku?",
    question: "Hal apa yang paling membuat aku bahagia?",
    options: [
      "Mendapat hadiah",
      "Mendapat apresiasi atas usaha sendiri",
      "Menghabiskan waktu bersama orang tersayang",
      "Mendapat uang tanpa diduga"
    ],
    answer: 3
  },
  {
    category: "Seberapa Kenal SHEA ke Aku?",
    question: "Kalau harus memilih satu kegiatan untuk menghabiskan waktu libur, aku lebih memilih apa?",
    options: [
      "Menonton film seharian",
      "Jalan-jalan mencari suasana baru",
      "Belajar hal baru",
      "Rebahan sambil bermain HP"
    ],
    answer: 2
  },

  // KATEGORI INFORMATIKA
  {
    category: "Anak Informatika Harus Bisa!",
    question: "Dalam pembuatan website, bahasa apa yang digunakan untuk mengatur warna, ukuran teks, dan tata letak halaman?",
    options: [
      "HTML",
      "JavaScript",
      "CSS",
      "SQL"
    ],
    answer: 2
  },
  {
    category: "Anak Informatika Harus Bisa!",
    question: "Apa fungsi utama JavaScript dalam sebuah website?",
    options: [
      "Mengatur struktur halaman website",
      "Membuat halaman website menjadi interaktif",
      "Mengelola tabel database",
      "Mengatur penyimpanan file website"
    ],
    answer: 1
  },
  {
    category: "Anak Informatika Harus Bisa!",
    question: "Seorang programmer ingin mengambil seluruh data mahasiswa dari tabel bernama mahasiswa. Perintah SQL yang tepat adalah apa?",
    options: [
      "INSERT INTO mahasiswa;",
      "DELETE FROM mahasiswa;",
      "UPDATE mahasiswa;",
      "SELECT * FROM mahasiswa;"
    ],
    answer: 3
  },
  {
    category: "Anak Informatika Harus Bisa!",
    question: "Dalam HTML, tag apa yang digunakan untuk membuat tautan menuju halaman website lain?",
    options: [
      "<img>",
      "<a>",
      "<p>",
      "<div>"
    ],
    answer: 1
  },
  {
    category: "Anak Informatika Harus Bisa!",
    question: "Jika sebuah tombol website bisa diklik dan menampilkan pesan setelah ditekan, teknologi yang berperan dalam interaksi tersebut adalah apa?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL"
    ],
    answer: 2
  }
];

// Variabel sesi kuis
let shuffledQuizQuestions = [];
let currentQuizQuestion = 0;
let quizCorrectAnswers = 0;
let quizHasWrongAnswer = false;


// ==========================================
// FUNGSI MENGACAK PERTANYAAN
// ==========================================

function shuffleQuizQuestions() {
  const questions = [...quizQuestions];

  for (let i = questions.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [questions[i], questions[randomIndex]] =
      [questions[randomIndex], questions[i]];
  }

  return questions;
}


// ==========================================
// FUNGSI UTAMA HALAMAN KUIS
// ==========================================

function renderQuizPage() {
  const app = document.querySelector("#app");

  app.classList.remove("page-enter");
  app.classList.add("page-transition");

  setTimeout(() => {
    app.innerHTML = `
      <main class="quiz-page">

        <div class="quiz-sparkles" aria-hidden="true">
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
        </div>

        <section class="quiz-content">

          <div id="quiz-screen"></div>

        </section>

      </main>
    `;

    // Balon halaman kuis
    const quizPage = app.querySelector(".quiz-page");
    addFloatingBalloons(quizPage);

    // Menampilkan halaman pembuka kuis
    renderQuizIntroduction();

    // Animasi masuk halaman
    requestAnimationFrame(() => {
      app.classList.remove("page-transition");
      app.classList.add("page-enter");
    });

  }, 250);
}

// ==========================================
// HALAMAN PEMBUKA KUIS
// ==========================================

function renderQuizIntroduction() {
  const quizScreen = document.querySelector("#quiz-screen");

  quizScreen.innerHTML = `
    <p class="quiz-label">A LITTLE GAME FOR YOU</p>

    <h1 class="quiz-title">
      SHEAA's Little Challenge ♡
    </h1>

    <p class="quiz-subtitle">
      A little game before your special surprise.
    </p>

    <div class="quiz-introduction-card">

      <div class="quiz-introduction-icon">🦋</div>

      <h2>Siap menerima tantangannya?</h2>

      <p>
        Ada 10 pertanyaan yang harus kamu jawab.
        Lima tentang seberapa kenal kamu denganku
        dan lima pertanyaan seputar dunia Informatika.
      </p>

      <p>
        Jawab semuanya dengan benar untuk membuka
        kejutan spesial yang sudah disiapkan.
      </p>

      <div class="quiz-rules">
        <span>♡ 10 Pertanyaan</span>
        <span>♡ Pilihan A–D</span>
        <span>♡ Wajib 10/10 benar</span>
      </div>

    </div>

    <button
      type="button"
      id="start-quiz-button"
      class="quiz-start-button"
    >
      Mulai Tantangan ♡
    </button>

    <div class="birthday-navigation quiz-navigation">

      <button
        type="button"
        id="quiz-back-button"
        class="birthday-back-button"
      >
        ← Kembali
      </button>

    </div>
  `;

  document
    .querySelector("#start-quiz-button")
    .addEventListener("click", startQuiz);

  document
    .querySelector("#quiz-back-button")
    .addEventListener("click", () => {
      renderGalleryPage();
    });
}


// ==========================================
// MEMULAI KUIS
// ==========================================

function startQuiz() {
  shuffledQuizQuestions = shuffleQuizQuestions();

  currentQuizQuestion = 0;
  quizCorrectAnswers = 0;
  quizHasWrongAnswer = false;

  renderQuizQuestion();
}

// ==========================================
// MENAMPILKAN PERTANYAAN
// ==========================================

function renderQuizQuestion() {
  const quizScreen = document.querySelector("#quiz-screen");

  const question = shuffledQuizQuestions[currentQuizQuestion];

  const questionNumber = currentQuizQuestion + 1;
  const progress = (questionNumber / 10) * 100;

  quizScreen.innerHTML = `
    <p class="quiz-label">
      SHEAA'S LITTLE CHALLENGE
    </p>

    <h1 class="quiz-title">
      Let's See Your Answer ♡
    </h1>

    <div class="quiz-progress-info">

      <span>Pertanyaan ${questionNumber} dari 10</span>

      <span>${Math.round(progress)}%</span>

    </div>

    <div class="quiz-progress-track">
      <div
        class="quiz-progress-fill"
        style="width: ${progress}%"
      ></div>
    </div>

    <div class="quiz-question-card">

      <span class="quiz-category">
        ${question.category}
      </span>

      <h2 class="quiz-question">
        ${question.question}
      </h2>

      <div class="quiz-options">

        ${question.options.map((option, index) => `
          <button
            type="button"
            class="quiz-option"
            data-answer="${index}"
          >
            <span class="quiz-option-letter">
              ${String.fromCharCode(65 + index)}
            </span>

            <span class="quiz-option-text">        
              ${option
                .replaceAll("<", "&lt;")
                .replaceAll(">", "&gt;")}
            </span>
          </button>
        `).join("")}

      </div>

      <div
        id="quiz-feedback"
        class="quiz-feedback"
        hidden
        aria-live="polite"
      ></div>

    </div>

    <div class="birthday-navigation quiz-navigation">

      <button
        type="button"
        id="quiz-back-button"
        class="birthday-back-button"
      >
        ← Kembali
      </button>

    </div>
  `;

  // Kembali ke galeri
  document
    .querySelector("#quiz-back-button")
    .addEventListener("click", () => {
      renderGalleryPage();
    });

  // Interaksi pilihan jawaban
  const answerButtons = quizScreen.querySelectorAll(".quiz-option");

  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      checkQuizAnswer(Number(button.dataset.answer));
    });
  });
}


// ==========================================
// MEMERIKSA JAWABAN
// ==========================================

function checkQuizAnswer(selectedAnswer) {
  const question = shuffledQuizQuestions[currentQuizQuestion];

  const answerButtons = document.querySelectorAll(".quiz-option");
  const feedback = document.querySelector("#quiz-feedback");

  // Mencegah jawaban dipilih lebih dari satu kali
  if (Array.from(answerButtons).some((button) => button.disabled)) {
    return;
  }

  const isCorrect = selectedAnswer === question.answer;

  // Mengunci seluruh pilihan jawaban
  answerButtons.forEach((button) => {
    button.disabled = true;

    const answerIndex = Number(button.dataset.answer);

    if (answerIndex === question.answer) {
      button.classList.add("correct");
    }

    if (answerIndex === selectedAnswer && !isCorrect) {
      button.classList.add("incorrect");
    }
  });

  // Menampilkan feedback
  feedback.hidden = false;

  if (isCorrect) {
    quizCorrectAnswers++;

    feedback.className = "quiz-feedback correct-feedback";

    feedback.innerHTML = `
      <strong>Yeay, jawabanmu benar! ♡</strong>
      <p>Pintar juga kamu, SHEAA!</p>
    `;
  } else {
    quizHasWrongAnswer = true;

    feedback.className = "quiz-feedback incorrect-feedback";

    feedback.innerHTML = `
      <strong>Ups, jawabanmu belum tepat!</strong>
      <p>Tenang, lanjut ke pertanyaan berikutnya, ya.</p>
    `;
  }

    // Menyiapkan tombol untuk melanjutkan kuis
  const nextButton = document.createElement("button");

  nextButton.type = "button";
  nextButton.className = "quiz-start-button";

  nextButton.textContent =
    currentQuizQuestion === shuffledQuizQuestions.length - 1
      ? "Lihat Hasil ♡"
      : "Pertanyaan Berikutnya →";

  feedback.appendChild(nextButton);

  nextButton.addEventListener("click", () => {
    currentQuizQuestion++;

    if (currentQuizQuestion < shuffledQuizQuestions.length) {
      renderQuizQuestion();
    } else {
      renderQuizResult();
    }
  });
}

// ==========================================
// HASIL AKHIR KUIS
// ==========================================

function renderQuizResult() {
  const quizScreen = document.querySelector("#quiz-screen");

  const isPassed =
    quizCorrectAnswers === quizQuestions.length &&
    !quizHasWrongAnswer;

  quizScreen.innerHTML = `
    <p class="quiz-label">THE CHALLENGE IS COMPLETE</p>

    <h1 class="quiz-title">
      ${isPassed ? "You Did It, SHEAA! ♡" : "One More Try, SHEAA!"}
    </h1>

    <div class="quiz-result-card">

      <div class="quiz-result-icon">
        ${isPassed ? "🎁" : "🦋"}
      </div>

      <h2>
        ${isPassed ? "Kamu berhasil!" : "Yah, belum berhasil!"}
      </h2>

<p class="quiz-result-description">
  ${
    isPassed
      ? "Yeay! Kamu berhasil menjawab semua pertanyaan dengan benar. Hadiah spesialmu sudah menunggu. ♡"
      : "Yah, masih ada jawaban yang belum tepat. Jangan menyerah, SHEAA!"
  }
</p>

${
  !isPassed
    ? `
      <div class="quiz-reminder">
        Kamu harus mendapatkan nilai sempurna 10/10
        untuk membuka hadiah spesial yang sudah disiapkan.
        Jadi, yuk ulangi kuisnya dan jawab semuanya
        dengan benar! ♡
      </div>
    `
    : ""
}

    ${
      isPassed
        ? `
          <p class="quiz-success-message">
            Surprise spesialmu sudah menunggu! ♡
          </p>

          <button
            type="button"
            id="quiz-next-button"
            class="quiz-start-button"
          >
            Lanjut ♡
          </button>
        `
        : `
          <button
            type="button"
            id="quiz-retry-button"
            class="quiz-start-button"
          >
            Ulangi Kuis ♡
          </button>
        `
    }

    <div class="birthday-navigation quiz-navigation">

      <button
        type="button"
        id="quiz-back-button"
        class="birthday-back-button"
      >
        ← Kembali
      </button>

    </div>
  `;

  // Menyimpan status kelulusan
  if (isPassed) {
    hasPassedQuiz = true;

    document
      .querySelector("#quiz-next-button")
      .addEventListener("click", () => {
        if (hasPassedQuiz) {
          renderGiftPage();
        }
      });

  } else {
    hasPassedQuiz = false;

    document
      .querySelector("#quiz-retry-button")
      .addEventListener("click", startQuiz);
  }

  // Kembali ke galeri
  document
    .querySelector("#quiz-back-button")
    .addEventListener("click", () => {
      renderGalleryPage();
    });
}


// ==========================================
// HALAMAN KEENAM - THE SECRET DELIVERY
// ==========================================

function renderGiftPage() {
  // Pengamanan: hadiah hanya bisa dibuka setelah lulus kuis
  if (!hasPassedQuiz) {
    renderQuizPage();
    return;
  }

  const app = document.querySelector("#app");

  app.classList.remove("page-enter");
  app.classList.add("page-transition");

  setTimeout(() => {
    app.innerHTML = `
      <main class="gift-page">

        <div class="gift-sparkles" aria-hidden="true">
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
        </div>

        <section class="gift-content">

          <div id="gift-screen">

            <p class="gift-label">
              ✧ A SPECIAL DELIVERY FOR YOU ✧
            </p>

            <h1 class="gift-title">
              Ihh, Pasti Kamu Penasaran, Kan? ♡
            </h1>

            <p class="gift-subtitle">
              Ada sesuatu yang spesial sedang menuju kepadamu...
            </p>

            <!-- Ilustrasi paket misterius -->
            <div class="gift-parcel-scene">

              <div class="gift-parcel-glow"></div>

              <div class="gift-parcel">

                <div class="gift-parcel-lid"></div>

                <div class="gift-parcel-body">

                  <div class="gift-parcel-ribbon"></div>

                  <div class="gift-parcel-bow">
                    <span></span>
                    <span></span>
                  </div>

                  <div class="gift-parcel-seal">
                    ♡
                  </div>

                </div>

                <div class="gift-parcel-tag">
                  FOR SHEAA
                </div>

              </div>

              <span class="gift-parcel-star star-one">✧</span>
              <span class="gift-parcel-star star-two">✦</span>
              <span class="gift-parcel-star star-three">♡</span>

            </div>

            <h2 class="gift-main-message">
              Your Surprise Is on Its Way!
            </h2>

            <p class="gift-description">
              Sebuah hadiah kecil telah disiapkan khusus untukmu.
              Tapi, kali ini kamu harus sedikit bersabar, ya!
              Hehehe... 🤭
            </p>

            <!-- Status hadiah -->
            <div class="gift-status-card">

              <p class="gift-status-label">
                STATUS HADIAH
              </p>

              <div class="gift-status-info">
                <span class="gift-status-icon">📦</span>
                <span>Sedang dipersiapkan</span>
              </div>

              <p class="gift-status-note">
                A little surprise, specially made for SHEAA ♡
              </p>

            </div>

            <!-- Tombol pesan rahasia -->
            <div class="gift-secret-card">

              <div class="gift-secret-icon">💌</div>

              <h2>
                Psstt... Ada Pesan Untukmu!
              </h2>

              <p>
                Sepertinya ada seseorang yang ingin
                menyampaikan sesuatu sebelum hadiahmu tiba.
              </p>

              <button
                type="button"
                id="open-secret-message"
                class="gift-button"
              >
                Buka Pesan Rahasia ♡
              </button>

            </div>

            <p class="gift-footer">
              Some surprises are worth waiting for. ♡
            </p>

          </div>

        </section>

      </main>
    `;

    // Balon tetap konsisten dengan halaman sebelumnya
    const giftPage = app.querySelector(".gift-page");
    addFloatingBalloons(giftPage);

    // Membuka pesan rahasia
    app
      .querySelector("#open-secret-message")
      .addEventListener("click", renderSecretMessage);

    // Animasi masuk halaman
    requestAnimationFrame(() => {
      app.classList.remove("page-transition");
      app.classList.add("page-enter");
    });

  }, 250);
}


// ==========================================
// PESAN RAHASIA UNTUK SHEAA
// ==========================================

function renderSecretMessage() {
  const giftScreen = document.querySelector("#gift-screen");

  giftScreen.innerHTML = `
    <div class="gift-letter-card">

      <div class="gift-letter-decoration">✧ ♡ ✧</div>

      <p class="gift-label">
        A LITTLE LETTER FOR SHEAA
      </p>

      <h1 class="gift-title">
        Dear SHEAA, ♡
      </h1>

      <div class="gift-letter-content">

        <p>
          Lucu juga kalau dipikir-pikir, kita sebenarnya
          sudah saling mengenal sejak beberapa semester lalu.
          Tapi rasanya baru di semester 4 kita mulai lebih
          dekat dan punya kesempatan untuk saling mengenal
          lebih jauh.
        </p>

        <p>
          Aku senang karena dari perkenalan yang awalnya
          biasa saja, ternyata kita bisa sampai di titik ini.
          Mungkin kita belum punya begitu banyak cerita
          bersama, tetapi aku berharap masih ada banyak
          kesempatan untuk berbagi cerita, tertawa, dan
          menciptakan hal-hal sederhana yang nantinya bisa
          dikenang.
        </p>

        <p>
          Di hari spesialmu ini, aku berharap kamu selalu
          diberi kesehatan, kebahagiaan, dan kemudahan dalam
          setiap langkah. Semoga apa pun yang sedang kamu
          usahakan bisa menemukan jalannya, dan semoga kamu
          selalu punya alasan untuk tersenyum, bahkan di
          hari-hari yang terasa berat.
        </p>

        <p>
          Jangan terlalu keras sama diri sendiri, ya.
          Kamu tidak harus selalu menjadi kuat, tidak harus
          selalu punya semua jawaban, dan tidak harus
          terburu-buru untuk sampai ke tujuan. Nikmati
          setiap prosesnya. Aku harap kamu selalu
          dikelilingi orang-orang baik yang bisa menghargai
          dan menyayangimu dengan tulus.
        </p>

        <p>
          Oh iya, satu lagi. Jangan lupa kalau masih ada
          sesuatu yang sedang menunggumu. Hehehe.
          Aku memang belum mau kasih tahu sekarang,
          jadi sabar sedikit, ya. Semoga nanti saat hadiah
          itu sampai, kamu bisa merasakan sedikit
          kebahagiaan dari sesuatu yang sudah aku
          siapkan khusus untukmu.
        </p>

        <p>
          Panjang umur, sehat selalu, bahagia selalu.
          Semoga tahun ini membawa lebih banyak cerita baik,
          kesempatan baru, dan kebahagiaan yang tidak
          pernah kamu duga.
        </p>

        <p class="gift-letter-signature">
          With lots of love,<br />
          Someone who prepared this little surprise for you. ♡
        </p>

      </div>

      <div class="gift-letter-decoration">
        🦋 ✧ 🦋
      </div>

      <button
        type="button"
        id="gift-closing-button"
        class="gift-button"
      >
        Lihat Pesan Terakhir ♡
      </button>

    </div>
  `;

  // Menuju closing website
  giftScreen
    .querySelector("#gift-closing-button")
    .addEventListener("click", renderGiftClosing);
}

// ==========================================
// CLOSING WEBSITE
// ==========================================

function renderGiftClosing() {
  const giftScreen = document.querySelector("#gift-screen");

  giftScreen.innerHTML = `
    <div class="gift-closing-card">

      <div class="gift-closing-decoration">
        🦋
      </div>

      <p class="gift-label">
        END OF OUR LITTLE JOURNEY
      </p>

      <h1 class="gift-title">
        Happy Birthday, SHEAA! ♡
      </h1>

      <button
        type="button"
        id="gift-home-button"
        class="gift-button"
      >
        Kembali ke Halaman Awal ♡
      </button>

      <div class="gift-closing-divider">
        ✧ ───── ♡ ───── ✧
      </div>

      <p class="gift-closing-message">
        Terima kasih sudah menjadi bagian dari
        cerita-cerita kecil yang begitu berarti.
      </p>

      <p class="gift-closing-message">
        Semoga hari-harimu selalu dipenuhi kebahagiaan,
        langkahmu dimudahkan, dan semua impian baikmu
        satu per satu menjadi nyata.
      </p>

      <p class="gift-closing-highlight">
        Jangan lupa bahagia, jangan lupa tersenyum,
        dan jangan lupa tunggu hadiah misteriusmu! 🤭
      </p>

      <div class="gift-closing-heart">
        ♡
      </div>

      <p class="gift-closing-signature">
        Made with love, just for you.
      </p>

      <p class="gift-footer">
        This is not the end of your story. ♡
      </p>

    </div>
  `;

  // Kembali ke halaman awal website
        giftScreen
          .querySelector("#gift-home-button")
          .addEventListener("click", () => {
        window.location.reload();
        });

  // Efek animasi penutup
  giftScreen.classList.remove("gift-closing-animation");

  requestAnimationFrame(() => {
    giftScreen.classList.add("gift-closing-animation");
  });
}

// ==========================================
// NAVIGASI DARI HALAMAN PERTAMA
// ==========================================

const appElement = document.querySelector("#app");

appElement.addEventListener("click", (event) => {
  const startButton = event.target.closest("#start-button");

  if (startButton) {
    // Memulai musik
    try {
      startBackgroundMusic();
    } catch (error) {
      console.error("Musik gagal dimulai:", error);
    }

    // Berpindah ke halaman kedua
    renderBirthdayPage();
  }
});