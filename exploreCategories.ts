export type ExploreSubcategory = {
  slug: string
  title: string
  description: string
  image: string
  matches: string[]
}

export type ExploreCollection = {
  slug: 'artworks' | 'literature' | 'essays' | 'sculptures'
  title: string
  description: string
  image: string
  subcategories: ExploreSubcategory[]
}

const subcategory = (
  slug: string,
  title: string,
  description: string,
  folder: string,
  matches: string[] = [title],
): ExploreSubcategory => ({
  slug,
  title,
  description,
  image: `/assets/images/${folder}/categories/${slug}.svg`,
  matches,
})

export const exploreCollections: ExploreCollection[] = [
  {
    slug: 'artworks',
    title: 'Artworks',
    description: 'Paintings, drawings, photography, and creative practices from many perspectives.',
    image: '/assets/images/artworks/artworks-collection.jpg',
    subcategories: [
      subcategory('paintings', 'Paintings', 'Original painted works, from quiet studies to bold compositions.', 'artworks', ['painting', 'paintings']),
      subcategory('traditional-art', 'Traditional Art', 'Handmade practices and material-led work, shared with creator context.', 'artworks', ['traditional art', 'traditional']),
      subcategory('digital-art', 'Digital Art', 'Images and compositions created with digital tools.', 'artworks', ['digital art', 'digital']),
      subcategory('masterpiece-drawings', 'Masterpiece Drawings', 'Selected drawings and studies, with provenance where available.', 'artworks', ['masterpiece drawings', 'drawing', 'drawings']),
      subcategory('illustrations', 'Illustrations', 'Visual storytelling, editorial images, and imaginative studies.', 'artworks', ['illustration', 'illustrations']),
      subcategory('portraits', 'Portraits', 'Works centered on people, likeness, and expression.', 'artworks', ['portrait', 'portraits']),
      subcategory('landscape-art', 'Landscape Art', 'Places, horizons, gardens, and imagined environments.', 'artworks', ['landscape art', 'landscape']),
      subcategory('abstract-art', 'Abstract Art', 'Shape, color, and gesture-led compositions.', 'artworks', ['abstract art', 'abstract']),
      subcategory('contemporary-art', 'Contemporary Art', 'Current practices and perspectives from living creative communities.', 'artworks', ['contemporary art', 'contemporary']),
      subcategory('classical-art', 'Classical Art', 'Classical approaches and documented historical works.', 'artworks', ['classical art', 'classical']),
      subcategory('photography', 'Photography', 'Photographic studies, portraits, and visual documents.', 'artworks', ['photography', 'photograph']),
      subcategory('mixed-media', 'Mixed Media', 'Works bringing more than one medium or process together.', 'artworks', ['mixed media', 'mixed-media']),
      subcategory('cultural-art', 'Cultural Art', 'Culturally grounded creative work, presented with context and care.', 'artworks', ['cultural art', 'cultural', 'heritage']),
    ],
  },
  {
    slug: 'literature',
    title: 'Literature',
    description: 'Poetry, stories, and literary works shared by their authors.',
    image: '/assets/images/literature/literature-collection.jpg',
    subcategories: [
      subcategory('novels', 'Novels', 'Long-form fiction and narrative writing.', 'literature', ['novel', 'novels']),
      subcategory('poetry', 'Poetry', 'Poetic works, collections, and verse.', 'literature', ['poetry']),
      subcategory('poems', 'Poems', 'Individual poems and short-form verse.', 'literature', ['poem', 'poems']),
      subcategory('short-stories', 'Short Stories', 'Compact fiction and short narrative forms.', 'literature', ['short story', 'short stories', 'fable', 'fables']),
      subcategory('folklore', 'Folklore', 'Community stories and oral traditions, with attribution where available.', 'literature', ['folklore', 'folk tale', 'folktale']),
      subcategory('legends', 'Legends', 'Legendary narratives and retellings.', 'literature', ['legend', 'legends']),
      subcategory('fables', 'Fables', 'Brief tales and fables, including original writing.', 'literature', ['fable', 'fables']),
      subcategory('myths', 'Myths', 'Mythic narratives and interpretations.', 'literature', ['myth', 'myths', 'mythology']),
      subcategory('literary-masterpieces', 'Literary Masterpieces', 'Notable works and editions with reliable publication details.', 'literature', ['literary masterpiece', 'masterpiece']),
      subcategory('historical-literature', 'Historical Literature', 'Literature placed in its historical context.', 'literature', ['historical literature', 'historical']),
      subcategory('creative-writing', 'Creative Writing', 'Original prose, poetry, and experimental writing.', 'literature', ['creative writing']),
      subcategory('anthologies', 'Anthologies', 'Collections bringing multiple works or voices together.', 'literature', ['anthology', 'anthologies']),
    ],
  },
  {
    slug: 'essays',
    title: 'Essays',
    description: 'Research, criticism, reflection, and personal perspectives.',
    image: '/assets/images/essays/essays-collection.jpg',
    subcategories: [
      subcategory('academic-essays', 'Academic Essays', 'Scholarly writing with citations and research context.', 'essays', ['academic essay', 'academic']),
      subcategory('literary-essays', 'Literary Essays', 'Writing about literature, language, and reading.', 'essays', ['literary essay', 'literary']),
      subcategory('historical-essays', 'Historical Essays', 'Essays exploring documented histories and their sources.', 'essays', ['historical essay', 'historical']),
      subcategory('cultural-essays', 'Cultural Essays', 'Thoughtful writing about culture and creative practice.', 'essays', ['cultural essay', 'cultural']),
      subcategory('philosophical-essays', 'Philosophical Essays', 'Questions, ideas, and arguments in philosophical writing.', 'essays', ['philosophical essay', 'philosophical']),
      subcategory('personal-essays', 'Personal Essays', 'First-person perspectives and lived experience.', 'essays', ['personal essay', 'personal']),
      subcategory('critical-essays', 'Critical Essays', 'Close analysis, interpretation, and critique.', 'essays', ['critical essay', 'critical']),
      subcategory('reflective-essays', 'Reflective Essays', 'Reflective writing about experience, practice, and learning.', 'essays', ['reflective essay', 'reflective', 'reflection']),
      subcategory('social-commentary', 'Social Commentary', 'Essays examining social life and public ideas.', 'essays', ['social commentary', 'commentary']),
      subcategory('art-criticism', 'Art Criticism', 'Critical perspectives on visual art and exhibitions.', 'essays', ['art criticism', 'criticism']),
      subcategory('research-based-essays', 'Research-Based Essays', 'Evidence-led essays with source context.', 'essays', ['research-based essay', 'research based', 'research']),
      subcategory('creative-nonfiction', 'Creative Nonfiction', 'Literary nonfiction grounded in real experience.', 'essays', ['creative nonfiction', 'nonfiction']),
    ],
  },
  {
    slug: 'sculptures',
    title: 'Sculptures',
    description: 'Three-dimensional works, materials, and installation practices.',
    image: '/assets/images/sculptures/sculptures-collection.jpg',
    subcategories: [
      subcategory('classical-sculptures', 'Classical Sculptures', 'Classical sculptural traditions and documented objects.', 'sculptures', ['classical sculpture', 'classical']),
      subcategory('contemporary-sculptures', 'Contemporary Sculptures', 'Sculptural work and installation in contemporary practice.', 'sculptures', ['contemporary sculpture', 'contemporary']),
      subcategory('abstract-sculptures', 'Abstract Sculptures', 'Sculptural forms that explore shape, space, and material.', 'sculptures', ['abstract sculpture', 'abstract']),
      subcategory('figurative-sculptures', 'Figurative Sculptures', 'Three-dimensional studies of the human or animal figure.', 'sculptures', ['figurative sculpture', 'figurative']),
      subcategory('wood-sculptures', 'Wood Sculptures', 'Carved, assembled, and shaped works in wood.', 'sculptures', ['wood sculpture', 'wood']),
      subcategory('stone-sculptures', 'Stone Sculptures', 'Sculptural studies in stone and related materials.', 'sculptures', ['stone sculpture', 'stone']),
      subcategory('metal-sculptures', 'Metal Sculptures', 'Form and structure in metalwork.', 'sculptures', ['metal sculpture', 'metal']),
      subcategory('clay-ceramic-sculptures', 'Clay and Ceramic Sculptures', 'Sculptural forms in clay and ceramic.', 'sculptures', ['clay and ceramic', 'ceramic sculpture', 'clay']),
      subcategory('marble-sculptures', 'Marble Sculptures', 'Sculptural work in marble, with material details when known.', 'sculptures', ['marble sculpture', 'marble']),
      subcategory('cultural-sculptures', 'Cultural Sculptures', 'Culturally grounded sculptural work shown with creator context.', 'sculptures', ['cultural sculpture', 'cultural']),
      subcategory('installation-art', 'Installation Art', 'Spatial works and installations.', 'sculptures', ['installation art', 'installation']),
      subcategory('miniature-sculptures', 'Miniature Sculptures', 'Small-scale sculptural objects and studies.', 'sculptures', ['miniature sculpture', 'miniature']),
    ],
  },
]

export function getExploreCollection(slug: string) {
  return exploreCollections.find((collection) => collection.slug === slug)
}

export function getExploreSubcategory(collection: ExploreCollection, slug: string) {
  return collection.subcategories.find((item) => item.slug === slug)
}
