check:
	pnpm run biome
	pnpm run build

clean:
	rm -r node_modules/
	rm -r dist/

dev:
	pnpm run dev

install:
	pnpm install

switch:
	git switch --create develop
