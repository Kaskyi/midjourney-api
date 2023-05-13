import "dotenv/config";
import { Midjourney } from "../src";
/**
 *
 * a simple example of how to use the imagine command
 * ```
 * npx tsx example/imagine-uri.ts
 * ```
 */
async function main() {
  const client = new Midjourney(
    <string>process.env.SERVER_ID,
    <string>process.env.CHANNEL_ID,
    <string>process.env.SALAI_TOKEN,
    true
  );
  const msg = await client.Imagine(
    "https://media.discordapp.net/attachments/1094892992281718894/1106660210380132503/Soga_A_Greek_man_with_mustache_in_national_costume_riding_a_don_3255e7c1-38ee-4892-b7c7-9f0dc3f2786d.png?width=1040&height=1040 https://cdn.discordapp.com/attachments/1094892992281718894/1106798152188702720/Soga__489d80b2-db74-4a93-a998-881a9542abbe.png  cool boy",
    (uri: string, progress: string) => {
      console.log("loading", uri, "progress", progress);
    }
  );
  console.log({ msg });
}
main().catch((err) => {
  console.error(err);
  process.exit(1);
});