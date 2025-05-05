export default function Footer() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <script type="module">
          import { sdk } from 'https://esm.sh/@farcaster/frame-sdk';
          window.onload = async () => {
            try {
              await sdk.actions.ready();
            } catch (error) {
              console.error(error);
            }
          };
        </script>
      `
    }} />
  );
}
