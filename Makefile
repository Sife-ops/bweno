test:
	deno test --allow-all

install:
	deno install -f --allow-run --allow-net --allow-read --allow-write --allow-env -n bweno ./src/main.ts
