check:
	pnpm run biome
	pnpm run build
	pnpm run knip

clean:
	rm -r node_modules/
	rm -r dist/

dev:
	pnpm run dev

fix:
	pnpm run biome:write

install:
	pnpm install

switch:
	git switch --create develop
