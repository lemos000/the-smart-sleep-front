// components/QuizModalV2.tsx
"use client";
import BebeColo from "@/app/assets/bebecolo.webp";
import Duvida from "@/app/assets/duvida.webp";
import Recem from "@/app/assets/recem.webp";
import TresSeis from "@/app/assets/0-6.webp";
import SeisDoze from "@/app/assets/7-12.webp";
import UmAno from "@/app/assets/umAno.webp";
import DoisAno from "@/app/assets/2anos.jpg";
import MaiorTres from "@/app/assets/4anos.webp";
import { AnimatePresence, motion } from "framer-motion";

import BebeContato from "@/app/assets/bebecontato.webp";
import Duvida2 from "@/app/assets/duvida2.webp";
import BebeDeChupeta from "@/app/assets/bebedechupeta.webp";
import BebeDeMamadeira from "@/app/assets/bebedemamadeira.webp";
import BebeEmbalo from "@/app/assets/bebembalo.webp";
import BebeNoColo from "@/app/assets/bebenocolo.webp";
import BebeDaora from "@/app/assets/bebedaora.webp";
import BebeLegal from "@/app/assets/bebelegal.webp";

import BercoTriste from "@/app/assets/aproximar-se-bebe-bonito.webp";
import NoturnoFrequente from "@/app/assets/noturnofrequente.webp";
import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  CalendarIcon,
  Lightbulb,
  X,
  ChevronLeft,
  ChevronRight,
  VolumeX,
  Volume2,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogOverlay,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Calendar } from "@/components/ui/calendar";
import ImageChoiceGrid from "./ImageChoiceGrid";
import { StaticImageData } from "next/image";
import { FlipCard } from "./Flipcard";
import CloudOverlay from "./PathDrawingLoop";

type Element = React.ReactElement;

/* ============================
   Tipos
============================ */
type QuestionInfo = BaseQuestion & {
  kind: "info";
};

type QuestionFlipcard = BaseQuestion & {
  kind: "flipcard";
  frontImage?: StaticImageData;
  backImage?: StaticImageData;
  backText?: string;
};

type Kind =
  | "radio"
  | "checkbox"
  | "select"
  | "switch"
  | "slider"
  | "range"
  | "textarea"
  | "input"
  | "popover"
  | "drawer"
  | "calendar"
  | "rating"
  | "info"
  | "flipcard";

type ImageOption = {
  value: string;
  label?: string;
  src: StaticImageData;
  alt?: string;
};

type BaseQuestion = {
  id: number;
  kind: Kind;
  title: string;
  subtitle?: string;
  hint?: string;
  labels?: { left?: string; right?: string; mid?: string };
  defaultValue?: unknown;
  imageOptions?: ReadonlyArray<ImageOption>;
};

type QuestionRadio = BaseQuestion & {
  kind: "radio";
  options: string[];
};

type QuestionCheckbox = BaseQuestion & {
  kind: "checkbox";
  options: string[];
};

type QuestionSelect = BaseQuestion & {
  kind: "select";
  options: string[];
};

type QuestionSwitch = BaseQuestion & {
  kind: "switch";
};

type QuestionSlider = BaseQuestion & {
  kind: "slider";
  // valor único (0..10)
  defaultValue?: number;
};

type QuestionRange = BaseQuestion & {
  kind: "range";
  // dois valores (ex.: [1,2])
  defaultValue?: [number, number];
};

type QuestionRating = BaseQuestion & {
  kind: "rating";
  defaultValue?: number; // 0..5
};

type QuestionTextarea = BaseQuestion & {
  kind: "textarea";
};

type QuestionInput = BaseQuestion & {
  kind: "input";
};

type QuestionPopover = BaseQuestion & {
  kind: "popover";
  popoverOptions: string[];
};

type QuestionDrawer = BaseQuestion & {
  kind: "drawer";
};

type QuestionCalendar = BaseQuestion & {
  kind: "calendar";
};

type Question =
  | QuestionRadio
  | QuestionCheckbox
  | QuestionSelect
  | QuestionSwitch
  | QuestionSlider
  | QuestionRange
  | QuestionRating
  | QuestionTextarea
  | QuestionInput
  | QuestionPopover
  | QuestionDrawer
  | QuestionCalendar
  | QuestionInfo
  | QuestionFlipcard;

interface Props {
  q: string;
  value: string;
  onChange: (value: string) => void;
}

// Mapeia o tipo de resposta esperado por question.kind
type AnswerValue<K extends Kind> = K extends "radio"
  ? string
  : K extends "checkbox"
  ? string[]
  : K extends "select"
  ? string
  : K extends "switch"
  ? boolean
  : K extends "slider"
  ? number
  : K extends "range"
  ? [number, number]
  : K extends "rating"
  ? number
  : K extends "textarea"
  ? string
  : K extends "input"
  ? string
  : K extends "popover"
  ? string
  : K extends "drawer"
  ? string
  : K extends "calendar"
  ? Date | null
  : unknown;

type AnyAnswer = AnswerValue<Kind>;
type Answers = Partial<Record<number, AnyAnswer>>;

/* ============================
   Dados (perguntas)
============================ */

const QUESTIONS = [
  {
    id: 1,
    kind: "radio",
    title: "Qual é o maior desafio HOJE para o bebê dormir no berço?",
    subtitle: "Escolha a opção mais próxima da sua realidade.",
    options: [
      "Só dorme no colo",
      "Acorda ao colocar no berço",
      "Despertares noturnos frequentes",
      "Não sei",
    ],
    hint: "Entender o principal gargalo nos ajuda a priorizar as primeiras mudanças.",
    imageOptions: [
      { value: "Só dorme no colo", src: BebeColo },
      {
        value: "Acorda ao colocar no berço",
        src: BercoTriste,
      },
      {
        value: "Despertares noturnos frequentes",
        src: NoturnoFrequente,
      },
      { value: "Não sei", src: Duvida },
    ],
  },
  {
    id: 2,
    kind: "radio",
    title: "Como o bebê costuma adormecer na maior parte das vezes?",
    options: [
      "Mamando/peito",
      "Ninar no colo/rede",
      "No carrinho/carona",
      "Já adormece no berço às vezes",
      "Não sei",
    ],
  },
  {
    id: 3,
    kind: "checkbox",
    title: "Quais dependências você gostaria de reduzir?",
    subtitle: "Pode marcar mais de uma.",
    options: [
      "Colo",
      "Peito/Mamadeira",
      "Chupeta",
      "Embalo/rede",
      "Contato constante",
      "Não sei",
    ],
    hint: "Dependências não são 'erradas'; só atrapalham quando impedem o bebê de consolidar o sono.",
    imageOptions: [
      { value: "Colo", src: BebeNoColo },
      { value: "Peito/Mamadeira", src: BebeDeMamadeira },
      { value: "Chupeta", src: BebeDeChupeta },
      { value: "Embalo/rede", src: BebeEmbalo },
      { value: "Contato constante", src: BebeContato },
      { value: "Não sei", src: Duvida2 },
    ],
  },
  {
    id: 4,
    kind: "select",
    title: "Qual faixa etária do seu bebê?",
    options: [
      "0–3 meses",
      "4–6 meses",
      "7–12 meses",
      "12–24 meses",
      "2–3 anos",
      "> 3 anos",
    ],
    imageOptions: [
      { value: "0–3 meses", src: Recem },
      { value: "4–6 meses", src: TresSeis },
      { value: "7–12 meses", src: SeisDoze },
      { value: "12–24 meses", src: UmAno },
      { value: "2–3 anos", src: DoisAno },
      { value: "> 3 anos", src: MaiorTres },
    ],
  },
  {
    id: 5,
    kind: "switch",
    title: "Você usa ruído branco no ritual do sono?",
    subtitle: "Quando usado corretamente pode ajudar a acalmar.",
  },
  {
    id: 6,
    kind: "slider",
    title: "Nível de cansaço ao fim do dia (pais/responsáveis)",
    labels: { left: "Tranquilo", right: "Exausto" },
    defaultValue: 6,
    hint: "Medir a exaustão ajuda a ajustar metas realistas nos primeiros dias.",
  },
  {
    id: 7,
    kind: "range",
    title: "Janela de sono DIURNA média",
    subtitle: "Selecione um intervalo (em horas).",
    labels: { left: "Curta", right: "Longa" },
    defaultValue: [1, 2] as [number, number],
  },
  {
    id: 8,
    kind: "info",
    title: "Temos algo importante pra te dizer!",
    subtitle: "💤 Sabia que o sono do bebê é um aprendizado?",
    hint: "No The Smart Sleep, você aprende a criar uma rotina previsível e tranquila — sem choro, sem culpa e sem depender de acessórios caros.",
  },
  {
    id: 9,
    kind: "rating",
    title: "Como você avalia a rotina atual do sono?",
    subtitle: "0 = Caótica / 5 = Redondinha",
    defaultValue: 2,
  },
  {
    id: 10,
    kind: "flipcard",
    title: "Dica de ouro do método gentil 💛",
    subtitle:
      "Toque para descobrir um segredo sobre como fazer o bebê aceitar o berço sem resistência.",
    frontImage: BebeLegal,
    backImage: BebeDaora,
    backText:
      "O segredo está em segurança emocional. Aqui nós ensinamos o ritual de aproximação: o bebê associa o berço ao colo, e o colo ao amor — o resto vem naturalmente. 💫",
  },
  {
    id: 11,
    kind: "calendar",
    title: "Quando você pretende começar o plano de 7 dias?",
    subtitle: "Escolha uma data inicial para seu novo começo.",
  },
  {
    id: 12,
    kind: "info",
    title: "✨ O momento perfeito pra começar é AGORA!",
    subtitle:
      "Cada dia que passa o bebê se adapta mais ao padrão atual. Quanto antes você começar, mais fácil será o processo.",
    hint: "Aproveite o valor de pré-venda do curso The Smart Sleep e comece hoje mesmo o passo a passo guiado.",
  },
  {
    id: 13,
    kind: "popover",
    title: "Quanto tempo dura o ritual noturno hoje?",
    subtitle: "Selecione uma faixa de duração.",
    popoverOptions: [
      "5–10 min",
      "10–20 min",
      "20–35 min",
      "35–50 min",
      "50–70 min",
      "+70 min",
    ],
  },

  {
    id: 14,
    kind: "input",
    title: "Quantos despertares noturnos (em média)?",
    subtitle: "Digite um número aproximado por noite.",
  },
  {
    id: 15,
    kind: "radio",
    title: "Alimentação noturna ainda é necessária?",
    subtitle: "De acordo com orientação pediátrica/idade.",
    options: ["Sim", "Não", "Em transição", "Não sei"],
  },

  {
    id: 16,
    kind: "radio",
    title: "Com quem o bebê dorme atualmente?",
    options: [
      "No berço no quarto dos pais",
      "No berço no quarto do bebê",
      "Cama compartilhada",
      "Turnos com responsáveis",
      "Não sei",
    ],
  },
  {
    id: 17,
    kind: "slider",
    title: "Quão disposto(a) você está para seguir um plano por 7 dias?",
    labels: { left: "Pouco", right: "Total" },
    defaultValue: 7,
  },
  {
    id: 18,
    kind: "checkbox",
    title: "Quais resultados você busca primeiro?",
    options: [
      "Aceitar o berço",
      "Reduzir choros na transferência",
      "Diminuir despertares",
      "Sonecas mais longas",
      "Ritual simples",
      "Não sei",
    ],
  },
  {
    id: 19,
    kind: "textarea",
    title: "Algo mais que eu deveria saber?",
    subtitle:
      "Ex.: viagens próximas, dentição, volta ao trabalho, enfermidades.",
  },
  {
    id: 20,
    kind: "drawer",
    title: "Plano rápido baseado nas suas respostas 💫",
    subtitle:
      "Descubra como aplicar este plano de forma segura e eficaz com o método completo do curso *Do Colo pro Berço em 7 Dias*.",
    hint: "As recomendações abaixo foram personalizadas de acordo com as respostas do seu quiz.",
  },
] satisfies ReadonlyArray<Question>;

/* ============================
   Componente principal
============================ */

function buildSuggestion(a: Answers): string {
  const dep = (a[3] as string[] | undefined) ?? [];
  const faixa = (a[4] as string | undefined) ?? "";
  const ruido = (a[5] as boolean | undefined) ?? false;
  const cansaco = (a[6] as number | undefined) ?? undefined;
  const janela = (a[7] as [number, number] | undefined) ?? undefined;
  const nota = (a[8] as number | undefined) ?? undefined;
  const inicio = (a[9] as Date | null | undefined) ?? undefined;

  const dicas: string[] = [];

  // Dependências
  if (dep.length) {
    dicas.push(
      `• Priorize reduzir gradualmente: ${dep.join(
        ", "
      )}. O curso vai te mostrar passo a passo como fazer isso de forma acolhedora, sem traumas.`
    );
  } else {
    dicas.push(
      "• Não indicou dependências fortes — ótimo ponto de partida! Aqui você verá como manter essa autonomia e fortalecer o vínculo ao mesmo tempo."
    );
  }

  // Faixa etária
  if (faixa) {
    dicas.push(
      `• Faixa etária: ${faixa}. Dentro do curso, mostramos as janelas de sono ideais para essa idade e como aplicá-las no dia a dia sem estresse.`
    );
  }

  // Ruído branco
  if (!ruido) {
    dicas.push(
      "• Considere incluir o ruído branco no ritual, explicamos o momento certo e o volume ideal para acalmar o bebê sem dependência."
    );
  }

  // Cansaço
  if (cansaco !== undefined) {
    dicas.push(
      `• Seu nível de cansaço atual é ${cansaco}/10. No plano de 7 dias do curso, você vai aprender a dividir responsabilidades e estabelecer uma rotina mais leve para toda a família.`
    );
  }

  // Janela diurna
  if (janela) {
    dicas.push(
      `• Janela diurna sugerida: ${janela[0]}–${janela[1]} h. O curso ensina como identificar os sinais de sono antes desse intervalo e evitar o “sono quebrado”.`
    );
  }

  // Nota de rotina
  if (nota !== undefined) {
    dicas.push(
      `• Sua rotina atual está em ${nota}/5. No treinamento, você verá como organizar um ritual simples e repetitivo que transforma o caos em tranquilidade.`
    );
  }

  // Data de início
  if (inicio instanceof Date) {
    const quando = format(inicio, "dd 'de' MMMM, yyyy", { locale: ptBR });
    dicas.push(
      `• Comece seu plano em ${quando}. E se quiser acelerar resultados, inicie o curso nesse dia — ele foi desenhado exatamente para esse ritmo de adaptação.`
    );
  }

  // Encerramento motivacional
  dicas.push(
    "• Lembre-se: consistência vence em 7 dias. E com o suporte e o método completo do curso The Smart Sleep, você não precisa descobrir tudo sozinho(a)."
  );

  // Fechamento com CTA direto
  dicas.push(
    "\n💛 Quer um passo a passo guiado, com vídeos e apoio em cada fase? Clique abaixo e garanta sua vaga com desconto antes que acabe!"
  );

  return [
    "✨ Plano rápido e gentil para o seu bebê dormir melhor:",
    "",
    ...dicas,
  ].join("\n");
}

const STORAGE_KEY = "quiz_done_v2";
function IntroStep({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="mx-auto w-full max-w-xl rounded-3xl border border-black/5 bg-white/90 p-8 text-center shadow-xl">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)]">
        7 dias pra destravar o berço
      </h1>
      <p className="mt-3 text-sm sm:text-base text-[var(--color-text)]/80">
        Responda rapidinho e te mostro um plano gentil, realista e focado no que
        mais importa pra sua família.
      </p>

      <div className="mt-8">
        <Button
          onClick={onContinue}
          className="mx-auto inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold
                   bg-emerald-500 hover:bg-emerald-600 text-white transition-colors duration-300"
        >
          Continuar
        </Button>
        <div className="mt-3 text-xs text-[var(--color-text)]/60">
          Leva ~2 minutos
        </div>
      </div>
    </div>
  );
}

export default function QuizModalV2(): Element | null {
  const [open, setOpen] = React.useState<boolean>(true);
  const [index, setIndex] = React.useState<number>(-1); // -1 = passo de introdução
  const [finished, setFinished] = React.useState<boolean>(false);
  const [answers, setAnswers] = React.useState<Answers>({});
  const [direction, setDirection] = React.useState<"next" | "prev">("next");

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const done = localStorage.getItem(STORAGE_KEY) === "1";
    if (done) setOpen(false); // se já concluiu, não abre
  }, []);

  const total = QUESTIONS.length;
  const current = React.useMemo(
    () => (index >= 0 ? QUESTIONS[index] : null),
    [index]
  );
  const progress = React.useMemo(() => {
    if (index < 0) return 0; // intro = 0%
    return Math.round(((index + 1) / total) * 100);
  }, [index, total]);

  const next = React.useCallback(() => {
    if (index < total - 1) {
      setDirection("next");
      setIndex((i) => i + 1);
    } else {
      setFinished(true);
      window.setTimeout(() => {
        setOpen(false);
        try {
          localStorage.setItem(STORAGE_KEY, "1");
        } catch {}
      }, 800);
    }
  }, [index, total]);

  const prev = React.useCallback(() => {
    if (index > 0) {
      setDirection("prev");
      setIndex((i) => i - 1);
    }
  }, [index]);

  const setAnswer = React.useCallback(
    (val: AnyAnswer): void => {
      if (index < 0) return; // no intro não registramos resposta
      const id = QUESTIONS[index].id;
      setAnswers((prev) => ({ ...prev, [id]: val }));
    },
    [index]
  );

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="p-5">
        <DialogOverlay className="fixed inset-0 bg-blue-400 backdrop-blur-sm overflow-hidden">
          <CloudOverlay />
        </DialogOverlay>
        <DialogContent
          onInteractOutside={(e) => e.preventDefault()}
          className="overflow-hidden w-full sm:max-w-2xl max-h-[88vh rounded-2xl border border-black/5 bg-[var(--color-bg)]
                   text-[var(--color-text)] p-4 sm:p-6 transition-all duration-300 data-[state=open]:opacity-100 data-[state=closed]:opacity-0"
        >
          <div className={`sticky top-0 z-10 -mx-4 sm:mx-0 bg-transparent"`}>
            <div className="flex items-center justify-between py-2">
              <DialogTitle className="text-base sm:text-lg font-semibold text-[var(--color-secondary)] p-2 ">
                Quiz de Sono
              </DialogTitle>
            </div>

            {index >= 0 && (
              <>
                <div className="flex items-center gap-3 pb-3 pr-2">
                  <span className="text-xs text-[var(--color-text)]/70 p-2">
                    Pergunta {index + 1} de {total}
                  </span>
                  <Progress value={progress} className="h-2 flex-1 pr-2" />
                </div>
                <Separator />
              </>
            )}
          </div>

          {!finished ? (
            <div className="mt-4 space-y-5">
              {index < 0 ? (
                <IntroStep onContinue={next} />
              ) : (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-primary)]">
                        {current?.title}
                      </h3>
                      {current?.subtitle && (
                        <p className="mt-1 text-sm text-[var(--color-text)]/80">
                          {current.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {current && (
                    <div className="relative overflow-hidden">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={current.id}
                          initial={{
                            opacity: 0,
                            x: direction === "next" ? 40 : -40,
                          }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{
                            opacity: 0,
                            x: direction === "next" ? -40 : 40,
                          }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="mt-4"
                        >
                          <QuestionBody
                            q={current}
                            value={answers[current.id]}
                            onChange={setAnswer}
                            answers={answers}
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  )}

                  <div className="mt-2 flex items-center justify-between">
                    <Button
                      variant="ghost"
                      onClick={prev}
                      disabled={index < 0}
                      className="gap-2"
                    >
                      <ChevronLeft className="h-4 w-4" /> Voltar
                    </Button>
                    <div className="text-xs text-[var(--color-text)]/60">
                      {index < 0 ? "Introdução" : `Passo ${index + 1}/${total}`}
                    </div>
                    <Button
                      onClick={next}
                      className="gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)]"
                    >
                      {index >= total - 1 ? "Concluir" : "Avançar"}{" "}
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="py-8 text-center">
              <h3 className="text-2xl font-extrabold text-[var(--color-primary)]">
                Perfeito!
              </h3>
              <p className="mt-2 text-[var(--color-text)]/80">
                Com base nas suas respostas, vamos sugerir um caminho gentil e
                realista para a sua família começar hoje.
              </p>
            </div>
          )}
        </DialogContent>
      </div>
    </Dialog>
  );
}

/* ============================
   Renderers por tipo — Tipados
============================ */
type QuestionBodyProps = {
  q: Question;
  value: AnyAnswer | undefined;
  onChange: (v: AnyAnswer) => void;
  answers: Answers;
};

function QuestionBody({ q, value, onChange, answers }: QuestionBodyProps) {
  // ✅ Todos os hooks aqui em cima, fora do switch
  const [loading, setLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);
  const [calOpen, setCalOpen] = React.useState(false);

  const startLoading = React.useCallback(() => {
    setLoading(true);
    setShowResult(false);
    setProgress(0);

    const duration = 2500;
    const step = 50;
    const increment = 100 / (duration / step);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShowResult(true);
            setLoading(false);
          }, 300);
        }
        return Math.min(next, 100);
      });
    }, step);
  }, []);

  switch (q.kind) {
    case "radio": {
      if (q.imageOptions?.length) {
        const v = (
          typeof value === "string" ? value : ""
        ) as AnswerValue<"radio">;
        return (
          <ImageChoiceGrid
            options={q.imageOptions}
            value={v}
            onChange={(val) => onChange(val as AnswerValue<"radio">)}
          />
        );
      }

      const v = (
        typeof value === "string" ? value : ""
      ) as AnswerValue<"radio">;
      return (
        <RadioGroup
          value={v}
          onValueChange={(val) => onChange(val as AnswerValue<"radio">)}
          className="grid gap-3"
        >
          {q.options.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-3 hover:bg-white/90"
            >
              <RadioGroupItem value={opt} />
              <span className="text-sm">{opt}</span>
            </label>
          ))}
        </RadioGroup>
      );
    }
    case "info": {
      return (
        <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-white to-emerald-50 p-6 text-center shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold text-[var(--color-primary)] mb-2">
            Isso mesmo!
          </h3>
          {q.hint && (
            <p className="text-sm text-[var(--color-text)]/60 italic">
              {q.hint}
            </p>
          )}

          <Button
            onClick={() =>
              window.open(
                "https://nexusrade.mycartpanda.com/checkout/169191668:1",
                "_blank"
              )
            }
            className="mt-4 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-6 py-3 rounded-full font-semibold"
          >
            Quero saber mais 💛
          </Button>
        </div>
      );
    }
    case "flipcard": {
      return (
        <FlipCard
          title={q.title}
          subtitle={q.subtitle}
          frontImage={q.frontImage}
          backText={q.backText}
        />
      );
    }

    case "checkbox": {
      if (q.imageOptions?.length) {
        const arr = Array.isArray(value)
          ? (value as AnswerValue<"checkbox">)
          : [];
        return (
          <ImageChoiceGrid
            options={q.imageOptions}
            value={arr}
            multiple
            onChange={(next) => onChange(next as AnswerValue<"checkbox">)}
          />
        );
      }

      const arr = Array.isArray(value)
        ? (value as AnswerValue<"checkbox">)
        : [];
      return (
        <div className="grid gap-2">
          {q.options.map((opt) => {
            const checked = arr.includes(opt);
            return (
              <label
                key={opt}
                className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-3 hover:bg-white/90"
              >
                <Checkbox
                  checked={checked}
                  onCheckedChange={(ck) => {
                    const set = new Set(arr);
                    ck ? set.add(opt) : set.delete(opt);
                    onChange(Array.from(set) as AnswerValue<"checkbox">);
                  }}
                />
                <span className="text-sm">{opt}</span>
              </label>
            );
          })}
        </div>
      );
    }

    case "select": {
      if (q.imageOptions?.length) {
        const v = (typeof value === "string" ? value : undefined) as
          | AnswerValue<"select">
          | undefined;
        return (
          <ImageChoiceGrid
            options={q.imageOptions}
            value={v}
            onChange={(val) => onChange(val as AnswerValue<"select">)}
          />
        );
      }

      const v = (typeof value === "string" ? value : undefined) as
        | AnswerValue<"select">
        | undefined;
      return (
        <Select
          value={v}
          onValueChange={(val) => onChange(val as AnswerValue<"select">)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione..." />
          </SelectTrigger>
          <SelectContent>
            {q.options.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }

    case "switch": {
      const v = Boolean(value as AnswerValue<"switch">);
      return (
        <div className="flex items-center justify-center rounded-xl border border-black/10 bg-white p-3">
          <div className="justify-between flex w-2/6 items-center">
            <VolumeX
              className={
                v
                  ? "h-5 w-5 text-white ease-in transition-all"
                  : "h-5 w-5 text-zinc-800 ease-in transition-all"
              }
            />
            <Switch
              checked={v}
              onCheckedChange={(val) => onChange(val as AnswerValue<"switch">)}
              aria-label="Ativar"
              className={[
                "relative inline-flex h-8 w-16 items-center rounded-full",
                "bg-zinc-300 data-[state=checked]:!bg-emerald-500",
                "transition-colors duration-300 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30",
                "[&>span]:h-6 [&>span]:w-6 [&>span]:rounded-full [&>span]:bg-white [&>span]:shadow-sm",
                "[&>span]:transition-transform [&>span]:duration-300 [&>span]:ease-out",
                "[&>span]:translate-x-1 data-[state=checked]:[&>span]:translate-x-9",
              ].join(" ")}
            />
            <Volume2
              className={
                v
                  ? "h-5 w-5 text-zinc-800 ease-in transition-all"
                  : "h-5 w-5 text-white ease-in transition-all"
              }
            />
          </div>
        </div>
      );
    }

    case "slider": {
      const def = (q as QuestionSlider).defaultValue ?? 5;
      const v = (
        typeof value === "number" ? value : def
      ) as AnswerValue<"slider">;

      const moodScale = [
        { icon: "😄", label: "Tranquilo" },
        { icon: "🙂", label: "Sereno" },
        { icon: "😐", label: "Neutro" },
        { icon: "😕", label: "Cansado" },
        { icon: "😩", label: "Exausto" },
      ];

      const motivationScale = [
        { icon: "😴", label: "Sem energia" },
        { icon: "😕", label: "Pouco animado" },
        { icon: "🙂", label: "Motivado" },
        { icon: "😃", label: "Empolgado" },
        { icon: "🔥", label: "100% focado!" },
      ];

      // Detecta o contexto
      const isMotivation =
        q.id === 17 ||
        q.title.toLowerCase().includes("disposto") ||
        q.title.toLowerCase().includes("plano");

      // Escolhe a escala certa
      const scale = isMotivation ? motivationScale : moodScale;

      const moodIndex = Math.min(
        scale.length - 1,
        Math.floor((v / 10) * scale.length)
      );

      return (
        <div className="space-y-4">
          {/* Emoji e legenda dinâmicos */}
          <div className="flex flex-col items-center gap-1 select-none">
            <div className="text-5xl leading-none transition-all duration-300">
              {scale[moodIndex].icon}
            </div>
            <span className="text-sm text-[var(--color-text)]/70 transition-all duration-300">
              {scale[moodIndex].label}
            </span>
          </div>

          <Slider
            max={10}
            step={1}
            value={[v]}
            onValueChange={(arr) => onChange(arr[0] as AnswerValue<"slider">)}
            className="relative w-full flex items-center select-none touch-none"
          >
            <div className="absolute h-2 w-full rounded-full bg-gray-200" />
            <div
              className={`absolute h-2 rounded-full transition-all duration-300 ${
                isMotivation
                  ? "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
                  : "bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500"
              }`}
              style={{ width: `${(v / 10) * 100}%` }}
            />
            <div
              className={`relative z-10 block h-6 w-6 rounded-full border-2 border-white shadow-md transition-transform duration-200 hover:scale-110 ${
                isMotivation
                  ? "bg-gradient-to-r from-orange-500 to-red-500"
                  : "bg-[var(--color-primary)]"
              }`}
              style={{
                left: `${(v / 10) * 100}%`,
                transform: "translateX(-50%)",
              }}
            />
          </Slider>

          {q.labels && (
            <div className="mt-1 flex justify-between text-xs text-[var(--color-text)]/70">
              <span>{q.labels.left}</span>
              <span>{q.labels.right}</span>
            </div>
          )}
        </div>
      );
    }

    case "range": {
      const def = ((q as QuestionRange).defaultValue ?? [1, 2]) as [
        number,
        number
      ];
      const v = (Array.isArray(value) ? value : def) as AnswerValue<"range">;

      return (
        <div className="space-y-3">
          {/* valores dinâmicos */}
          <div className="flex justify-center gap-2 text-sm font-medium text-[var(--color-primary)]">
            <span>{v[0].toFixed(1)}h</span>
            <span className="text-[var(--color-text)]/50">–</span>
            <span>{v[1].toFixed(1)}h</span>
          </div>

          <Slider
            min={0.5}
            max={4}
            step={0.5}
            value={v}
            onValueChange={(arr) =>
              onChange([arr[0], arr[1]] as AnswerValue<"range">)
            }
          />

          {q.labels && (
            <div className="mt-1 flex justify-between text-xs text-[var(--color-text)]/70">
              <span>{q.labels.left}</span>
              <span>{q.labels.right}</span>
            </div>
          )}
        </div>
      );
    }

    case "rating": {
      const def = (q as QuestionRating).defaultValue ?? 2;
      const v = (
        typeof value === "number" ? value : def
      ) as AnswerValue<"rating">;
      return (
        <div className="grid gap-2">
          <Slider
            min={0}
            max={5}
            step={1}
            value={[v]}
            onValueChange={(arr) => onChange(arr[0] as AnswerValue<"rating">)}
          />
          <div className="text-xs text-[var(--color-text)]/70">
            Nota: <strong>{v}</strong> de 5
          </div>
        </div>
      );
    }

    case "textarea": {
      const v = (
        typeof value === "string" ? value : ""
      ) as AnswerValue<"textarea">;
      return (
        <Textarea
          placeholder="Escreva aqui..."
          value={v}
          onChange={(e) => onChange(e.target.value as AnswerValue<"textarea">)}
          className="min-h-[120px]"
        />
      );
    }

    case "input": {
      const v = (
        typeof value === "string" ? value : ""
      ) as AnswerValue<"input">;
      return (
        <Input
          type="number"
          placeholder="Ex.: 3"
          value={v}
          onChange={(e) => onChange(e.target.value as AnswerValue<"input">)}
        />
      );
    }

    case "popover": {
      // Suporte a imageOptions dentro do popover
      if (q.imageOptions?.length) {
        const v = (typeof value === "string" ? value : undefined) as
          | AnswerValue<"popover">
          | undefined;
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span>{v ?? "Selecionar opção"}</span>
                <CalendarIcon className="h-4 w-4 opacity-60" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[520px] max-w-[90vw]">
              <ImageChoiceGrid
                options={q.imageOptions}
                value={v}
                onChange={(val) => onChange(val as AnswerValue<"popover">)}
              />
            </PopoverContent>
          </Popover>
        );
      }

      const v = (typeof value === "string" ? value : undefined) as
        | AnswerValue<"popover">
        | undefined;
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <span>{v ?? "Selecionar duração"}</span>
              <CalendarIcon className="h-4 w-4 opacity-60" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="grid gap-2">
              {(q as QuestionPopover).popoverOptions.map((opt) => (
                <Button
                  key={opt}
                  variant="ghost"
                  className="justify-start"
                  onClick={() => onChange(opt as AnswerValue<"popover">)}
                >
                  {opt}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      );
    }

    case "drawer": {
      return (
        <div className="flex flex-col gap-4">
          <Drawer onOpenChange={(open) => open && startLoading()}>
            <DrawerTrigger asChild>
              <Button
                className="w-full justify-center gap-2 rounded-full py-4 text-base font-semibold 
                        bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] 
                        text-white shadow-md hover:brightness-110 transition-all"
              >
                <Lightbulb className="h-5 w-5" />
                Ver meu plano rápido
              </Button>
            </DrawerTrigger>

            <DrawerContent
              className="bg-white text-left rounded-t-[32px] shadow-2xl p-8
                max-h-[85vh] sm:max-h-[90vh] overflow-y-auto sm:overflow-visible
                [&::after]:hidden sm:[&::after]:hidden
                overscroll-contain"
            >
              <DrawerHeader className="pb-2">
                <DrawerTitle className="text-2xl font-bold text-[var(--color-primary)]">
                  {loading ? "Gerando seu plano..." : "Seu plano de 7 dias ✨"}
                </DrawerTitle>
                <p className="text-sm text-[var(--color-text)]/70">
                  {loading
                    ? "Analisando suas respostas com base nos padrões de sono..."
                    : "Criado automaticamente com base nas suas respostas"}
                </p>
              </DrawerHeader>

              {!showResult ? (
                <div className="px-2 py-10 flex flex-col items-center gap-6 text-center overflow-hidden">
                  <div className="w-full max-w-sm h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-200"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-[var(--color-text)]/70 font-medium">
                    {progress < 100
                      ? `${Math.round(progress)}% concluído`
                      : "Finalizando análise..."}
                  </p>
                  <div className="text-4xl animate-pulse">💤</div>
                </div>
              ) : (
                <div className="px-2 pb-6 text-base leading-relaxed text-[var(--color-text)]">
                  {buildSuggestion(answers)?.trim()?.length ? (
                    <div className="space-y-3">
                      {buildSuggestion(answers)
                        .split("\n")
                        .map((line, i) =>
                          line.startsWith("•") ? (
                            <p key={i} className="flex items-start gap-2">
                              <span className="text-[var(--color-primary)] text-lg">
                                •
                              </span>
                              <span>{line.replace("•", "").trim()}</span>
                            </p>
                          ) : (
                            <p key={i} className="font-semibold">
                              {line}
                            </p>
                          )
                        )}
                      <Button
                        onClick={() =>
                          window.open(
                            "https://nexusrade.mycartpanda.com/checkout/169191668:1",
                            "_blank"
                          )
                        }
                        className="mt-4 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-6 py-3 rounded-full font-semibold"
                      >
                        Quero saber mais 💛
                      </Button>
                    </div>
                  ) : (
                    <p className="italic text-center text-muted-foreground">
                      Complete o quiz para gerar seu plano personalizado 😊
                    </p>
                  )}
                </div>
              )}
            </DrawerContent>
          </Drawer>
        </div>
      );
    }

    case "calendar": {
      const v =
        value instanceof Date || value === null || value === undefined
          ? (value as AnswerValue<"calendar">)
          : undefined;

      // hoje às 00:00 pra comparar sem ruído de horas
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // 💡 Frases divertidas por dia da semana
      const dayMessages: Record<number, { emoji: string; text: string }> = {
        0: { emoji: "🌞", text: "Domingo de descanso e energia nova!" },
        1: {
          emoji: "🚀",
          text: "Segunda é o melhor dia pra recomeçar com propósito!",
        },
        2: {
          emoji: "🌿",
          text: "Terça pede leveza — e um plano gentil de sono.",
        },
        3: {
          emoji: "💪",
          text: "Quarta é dia de firmar o compromisso com o berço!",
        },
        4: {
          emoji: "🌈",
          text: "Quinta combina com pequenas vitórias e bons cochilos.",
        },
        5: {
          emoji: "🎉",
          text: "Sextou! Que tal preparar o ambiente pro fim de semana?",
        },
        6: {
          emoji: "🛏️",
          text: "Sábado perfeito pra ajustar a rotina e descansar juntos.",
        },
      };

      const dayInfo = v instanceof Date ? dayMessages[v.getDay()] : undefined;

      return (
        <div className="space-y-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between border-[2px] border-[var(--color-primary)]/40 hover:border-[var(--color-primary)] transition-colors rounded-xl px-4 py-3 text-[var(--color-text)] font-medium"
              >
                <span className="flex items-center gap-2">
                  {v ? (
                    <>
                      <CalendarIcon className="h-4 w-4 text-[var(--color-primary)]" />
                      {format(v as Date, "dd 'de' MMMM, yyyy", {
                        locale: ptBR,
                      })}
                    </>
                  ) : (
                    <>
                      <CalendarIcon className="h-4 w-4 text-[var(--color-primary)]" />
                      Escolher data
                    </>
                  )}
                </span>
                {v && dayInfo ? (
                  <span className="text-xl">{dayInfo.emoji}</span>
                ) : (
                  <span className="text-xl">📅</span>
                )}
              </Button>
            </PopoverTrigger>

            <PopoverContent className="p-2 rounded-2xl border border-[var(--color-primary)]/20 shadow-md bg-white">
              <Calendar
                mode="single"
                selected={v ?? undefined}
                onSelect={(d) =>
                  onChange((d ?? null) as AnswerValue<"calendar">)
                }
                disabled={(date) => {
                  const d = new Date(date);
                  d.setHours(0, 0, 0, 0);
                  return d < today;
                }}
                className="[&_button.today]:border-[var(--color-primary)]"
              />
            </PopoverContent>
          </Popover>

          {/* Mensagem de feedback */}
          {v && dayInfo && (
            <div className="flex items-center gap-3 bg-[var(--color-primary)]/10 rounded-xl p-3 transition-all duration-300">
              <span className="text-2xl">{dayInfo.emoji}</span>
              <p className="text-sm text-[var(--color-text)] font-medium leading-snug">
                {dayInfo.text}
              </p>
            </div>
          )}
        </div>
      );
    }
  }
}

/* ============================
   Reset de Storage (tipado)
============================ */

type ResetMode = "quiz" | "all" | "none";

export function StorageReset({ mode = "quiz" }: { mode?: ResetMode }): null {
  React.useEffect(() => {
    try {
      if (mode === "all") localStorage.clear();
      else if (mode === "quiz") {
        localStorage.removeItem("quiz_done");
        localStorage.removeItem("quiz_done_v2");
      }
    } catch {
      /* noop */
    }
  }, [mode]);
  return null;
}
