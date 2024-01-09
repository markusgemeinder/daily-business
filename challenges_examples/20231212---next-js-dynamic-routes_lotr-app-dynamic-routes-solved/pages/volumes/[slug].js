import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data";

export default function VolumeDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeData = volumes.find((volume) => volume.slug === slug);
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  // ========================================

  // console.log(`router.query >>> {slug} is ${slug}`);
  // console.log(`volumes is ${JSON.stringify(volumes)}`);
  // console.log(`volumeData is ${JSON.stringify(volumeData)}`);
  // console.log(`volumeIndex is ${JSON.stringify(volumeIndex)}`);

  // When console.log delivers 'router is Object Object' first you
  // have to stringify the object, i.e. ${JSON.stringify(query)}'

  // ========================================

  if (!volumeData) {
    return;

    // Early return if volumeData is empty to avoid  error in case
    // if async hook useRouter() didn't fetch data yet
  }
  // ========================================

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return null;

    // Early return if volume is empty
  }
  // ========================================

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}

// ========================================
// Original challenge code (hard coded for every book title)
// ========================================

// import Image from "next/image";
// import Link from "next/link";
// import { volumes } from "../../lib/data.js";

// export default function VolumeDetail() {
//   const volumeIndex = volumes.findIndex(
//     ({ slug }) => slug === "the-fellowship-of-the-ring"
//   );

//   const volume = volumes[volumeIndex];
//   const nextVolume = volumes[volumeIndex + 1];
//   const previousVolume = volumes[volumeIndex - 1];

//   if (!volume) {
//     return null;
//   }

//   const { title, description, cover, books } = volume;

//   return (
//     ...
//   );
// }
