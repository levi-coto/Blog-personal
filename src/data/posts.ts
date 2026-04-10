export interface PostContent {
  title: string;
  excerpt: string;
  content: string;
}

export interface Post {
  id: string;
  slug: string;
  date: string;
  es: PostContent;
  en: PostContent;
}

export const posts: Post[] = [
  {
    id: '3',
    slug: 'illusions-age-intelligence',
    date: '2026.04.08',
    es: {
      title: 'Illusions in the age of intelligence and machines',
      excerpt: 'Una reflexión sobre "la ilusión de pensar" en la era de la IA y el riesgo de delegar nuestra capacidad cognitiva a las máquinas.',
      content: `
*"Ilusiones en la era de la inteligencia y las máquinas"*

Abordar la creciente no-necesidad de pensar no es algo que deba tomarse a la ligera. Avanzar a pasos agigantados hacia el horizonte no nos garantiza entender el camino. En una caminata casual y guiada, quizá no sea tan necesario; siempre habrá alguien que pueda llevarnos de vuelta.

Sin embargo, cuando entender el camino determina resultados —e incluso la capacidad de ejercer control sobre una inteligencia que mañana podría superarnos— ya no es opcional. Es fundamental para la supervivencia de nuestra especie.

No pretendo hablar con autoridad absoluta sobre temas de los que no soy el más apto. Pero sí considero oportuno poner estas ideas sobre la mesa, no para cerrarlas, sino para que cada quien pueda reflexionar y encontrar sus propias respuestas.

A estas alturas, querido lector, seguramente entiendes que en pleno 2026 no podría estar hablando de otra cosa que no sea la inteligencia artificial. Incluso podrías pensar que esto fue escrito por una IA. Y estarías equivocado.

Aunque no del todo.

La redacción y revisión de este texto fueron, en efecto, asistidas por inteligencia artificial. Pero detrás de cada palabra hubo primero un proceso biológico. Me senté a pensar. Algo que, quizás, ya empieza a ser inusual.

Entrando en materia, el problema fundamental no es la falta de entendimiento básico sobre qué es la inteligencia artificial. El verdadero problema —cada vez más presente— es lo que yo llamo “la ilusión de pensar”.

La ilusión de creer que estamos realizando un trabajo cognitivo profundo simplemente por darle instrucciones a una máquina.

Dar buenas instrucciones no es trivial. Requiere contexto, criterio y conocimiento. Pero debemos reconocer algo importante: tú y yo fuimos formados en una era previa a la IA. La realidad para las siguientes generaciones podría ser completamente distinta.

A medida que delegamos el pensamiento, nuestros propios procesos —químicos, neuronales, fundamentales— podrían empezar a cambiar.

Al mismo tiempo, el conocimiento evoluciona a una velocidad sin precedentes. Ideas que hace diez años eran válidas hoy han cambiado, y seguirán cambiando.

¿Qué garantiza que siquiera entendamos una fracción de esa evolución?

La inteligencia artificial está acelerando la investigación y la generación de conocimiento. Pero esta aceleración empieza a parecerse a un elefante intentando pasar por el ojo de una aguja.

Mientras la IA crece, y con ella la cantidad de información que produce, nuestra capacidad para entenderla, criticarla y discriminarla se reduce drásticamente.

Que pensar hoy sea una opción no es progreso. Es un síntoma.

Generamos miles de ideas sin entender ninguna, porque “la IA ya lo sabe”. Dejamos de interesarnos por sistemas, conceptos y fundamentos, porque la IA responde por nosotros.

Y aun así, somos cada vez menos capaces de procesar lo que la propia IA puede enseñarnos, ya sea por incapacidad o por comodidad.

Esto crea un ciclo autodestructivo.

En el futuro, quizá no se necesite la IA más avanzada para debilitarnos intelectualmente. Bastará con la más básica, porque nuestro pensamiento también será básico.

Aun así, creo firmemente que las oportunidades son tan reales como los riesgos.

La inteligencia artificial tiene el potencial de mejorar radicalmente la calidad de vida. De acelerar el desarrollo de curas para enfermedades como el cáncer. De impactar tanto la salud física como mental. De construir sistemas que permitan reducir la pobreza y mejorar las condiciones de vida de las poblaciones más vulnerables.

Esta dualidad importa.

Es algo que Dario Amodei entiende bien: es necesario comprender tanto lo que vale la pena construir como aquello a lo que nos enfrentamos.

No para simplemente “saber”, sino para actuar.

Porque el futuro que construyamos con la inteligencia artificial no está definido. Depende de quienes decidan involucrarse y de las decisiones que tomemos.

**Levi Coto**

Just inspired.
      `
    },
    en: {
      title: 'Mirages in the Age of Machines and Intelligence',
      excerpt: 'A reflection on "the illusion of thinking" in the AI era and the risk of delegating our cognitive capacity to machines.',
      content: `
# Mirages in the Age of Machines and Intelligence

Addressing the growing "non-need" to think is not something to be taken lightly. Charging headlong toward the horizon is no guarantee that we understand the path we’re on. On a casual, guided stroll, perhaps that understanding isn't vital; there will always be someone to lead us back.

However, when understanding the path determines the outcome—and even our ability to exercise control over an intelligence that may soon surpass us—it is no longer optional. It becomes fundamental to the survival of our species.

I don’t claim absolute authority on subjects where I am not the foremost expert. But I find it timely to put these ideas on the table—not to close the debate, but so that each of us can reflect and find our own answers.

By now, dear reader, you surely realize that in mid-2026, I couldn't be talking about anything other than Artificial Intelligence. You might even think this was written by an AI. And you would be wrong.

Though, perhaps, not entirely.

The drafting and editing of this text were indeed assisted by AI. But behind every word, there was first a biological process. I sat down to think. Something that, perhaps, is already becoming unusual.

Getting to the heart of the matter: the fundamental problem isn't a basic lack of understanding about what AI is. The real issue—one that is increasingly pervasive—is what I call **"the illusion of thinking."**

It is the fallacy of believing we are engaging in deep cognitive work simply because we are giving instructions to a machine.

Prompting is not trivial. It requires context, judgment, and knowledge. But we must acknowledge something crucial: you and I were formed in a pre-AI era. The reality for the next generations could be entirely different.

As we delegate thought, our own processes—chemical, neural, fundamental—could begin to shift.

At the same time, knowledge is evolving at an unprecedented speed. Ideas that were valid ten years ago have changed, and will continue to do so. What guarantee do we have that we can comprehend even a fraction of that evolution?

AI is accelerating research and the generation of knowledge. But this acceleration is beginning to feel like an elephant trying to pass through the eye of a needle. As AI grows, and with it the sheer volume of information it produces, our capacity to understand, criticize, and discern that information is drastically shrinking.

The fact that thinking has become an "option" today is not progress. It is a symptom.

We generate thousands of ideas without understanding a single one, because "the AI already knows it." We stop caring about systems, foundations, and core concepts because the AI provides the answers for us. And yet, we are becoming less and less capable of processing what the AI itself can teach us—whether due to incapacity or sheer convenience.

This creates a self-destructive cycle.

In the future, we may not need the most advanced AI to weaken us intellectually. The most basic one will suffice, because our own thinking will have become just as basic.

Even so, I firmly believe the opportunities are as real as the risks.

Artificial Intelligence has the potential to radically improve our quality of life. To accelerate cures for diseases like cancer. To impact both physical and mental health. To build systems that reduce poverty and improve conditions for the most vulnerable populations.

This duality matters.

It is something Dario Amodei understands well: we must comprehend both what is worth building and what we are up against. Not simply to "know," but to act.

Because the future we build with AI is not yet defined. It depends on those who choose to get involved and the decisions we make today.

**Levi Coto**

Just inspired
      `
    }
  }
];
