var documenterSearchIndex = {"docs":
[{"location":"#MetaGraphsNext.jl-1","page":"MetaGraphsNext.jl","title":"MetaGraphsNext.jl","text":"","category":"section"},{"location":"#","page":"MetaGraphsNext.jl","title":"MetaGraphsNext.jl","text":"Modules = [MetaGraphsNext]","category":"page"},{"location":"#","page":"MetaGraphsNext.jl","title":"MetaGraphsNext.jl","text":"Modules = [MetaGraphsNext]","category":"page"},{"location":"#MetaGraphsNext.DOTFormat","page":"MetaGraphsNext.jl","title":"MetaGraphsNext.DOTFormat","text":"struct DOTFormat <: AbstractGraphFormat end\n\nIf all metadata types support pairs or are nothing, you can save MetaGraphs in DOTFormat.\n\njulia> using MetaGraphs\n\njulia> using LightGraphs\n\njulia> simple = MetaGraph(Graph());\n\njulia> simple[:a] = nothing; simple[:b] = nothing; simple[:a, :b] = nothing;\n\njulia> mktemp() do file, io\n            savegraph(file, simple, DOTFormat())\n            print(read(file, String))\n        end\ngraph T {\n    a\n    b\n    a -- b\n}\n\njulia> complicated = MetaGraph(DiGraph(),\n            VertexMeta = Dict{Symbol, Int},\n            EdgeMeta = Dict{Symbol, Int},\n            gprops = (tagged = true,)\n        );\n\njulia> complicated[:a] = Dict(:code_1 => 1, :code_2 => 2);\n\njulia> complicated[:b] = Dict(:code => 2);\n\njulia> complicated[:a, :b] = Dict(:code => 12);\n\njulia> mktemp() do file, io\n            savegraph(file, complicated, DOTFormat())\n            print(read(file, String))\n        end\ndigraph G {\n    tagged = true\n    a [code_1 = 1, code_2 = 2]\n    b [code = 2]\n    a -> b [code = 12]\n}\n\n\n\n\n\n","category":"type"},{"location":"#MetaGraphsNext.MGFormat","page":"MetaGraphsNext.jl","title":"MetaGraphsNext.MGFormat","text":"struct MGFormat <: AbstractGraphFormat end\n\nYou can save MetaGraphs in a MGFormat, currently based on JLD2.\n\njulia> using MetaGraphs\n\njulia> using LightGraphs: Edge, Graph,  loadgraph, savegraph\n\njulia> complicated = MetaGraph(Graph());\n\njulia> mktemp() do file, io\n            savegraph(file, complicated)\n            loadgraph(file, \"something\", MGFormat()) == complicated\n        end\ntrue\n\n\n\n\n\n","category":"type"},{"location":"#MetaGraphsNext.MetaGraph-Union{Tuple{LightGraphs.AbstractGraph{T}}, Tuple{T}, Tuple{Vertex}} where T where Vertex","page":"MetaGraphsNext.jl","title":"MetaGraphsNext.MetaGraph","text":"MetaGraph(g;\n    Label = Symbol,\n    VertexMeta = nothing,\n    EdgeMeta = nothing,\n    gprops = nothing,\n    weightfunction = eprops -> 1.0,\n    defaultweight = 1.0\n)\n\nConstruct a new meta graph based on g, where Label is the type of the vertex labels, VertexMeta is the type of the metadata at a vertex, and EdgeMeta is the type of the metadata at an edge. You can also attach arbitrary graph level metadata as gprops.\n\njulia> using LightGraphs\n\njulia> using MetaGraphs\n\njulia> colors = MetaGraph(Graph(), VertexMeta = Int, EdgeMeta = Symbol, gprops = \"special\")\nMeta graph based on a {0, 0} undirected simple Int64 graph with vertices indexed by Symbol(s), Int64(s) vertex metadata, Symbol(s) edge metadata, \"special\" as graph metadata, and default weight 1.0\n\nUse setindex! to add a new vertex with the given metadata.\n\njulia> colors[:red] = 1;\n\njulia> colors[:yellow] = 2;\n\njulia> colors[:blue] = 3;\n\nYou can access and change the metadata using indexing: zero arguments for graph metadata, one label for vertex metadata, and two labels for edge metadata.\n\njulia> colors[]\n\"special\"\n\njulia> colors[:blue] = 4;\n\njulia> colors[:blue]\n4\n\njulia> colors[:red, :yellow] = :orange;\n\njulia> colors[:red, :yellow]\n:orange\n\nYou can delete vertices and edges with delete!.\n\njulia> delete!(colors, :red, :yellow);\n\njulia> delete!(colors, :blue);\n\nYou can use the weightfunction keyword to specify a function which will transform vertex metadata into a weight. This weight must always be the same type as the defaultweight.\n\njulia> weighted = MetaGraph(Graph(), EdgeMeta = Float64, weightfunction = identity);\n\njulia> weighted[:red] = nothing; weighted[:blue] = nothing; weighted[:yellow] = nothing;\n\njulia> weighted[:red, :blue] = 1.0; weighted[:blue, :yellow] = 2.0;\n\njulia> the_weights = LightGraphs.weights(weighted)\nmetaweights\n\njulia> size(the_weights)\n(3, 3)\n\njulia> the_weights[1, 3]\n1.0\n\njulia> diameter(weighted)\n3.0\n\nMetaGraphs inherit many methods from LightGraphs. In general, inherited methods refer to vertices by codes, not labels.\n\njulia> is_directed(colors)\nfalse\n\njulia> nv(zero(colors))\n0\n\njulia> ne(copy(colors))\n0\n\njulia> add_vertex!(colors, :white, 4)\ntrue\n\njulia> add_edge!(colors, 1, 3, :pink)\ntrue\n\njulia> rem_edge!(colors, 1, 3)\ntrue\n\njulia> rem_vertex!(colors, 3)\ntrue\n\njulia> rem_vertex!(colors, 3)\nfalse\n\njulia> eltype(colors) == Int\ntrue\n\njulia> edgetype(colors) == Edge{Int}\ntrue\n\njulia> vertices(colors)\nBase.OneTo(2)\n\njulia> has_edge(colors, 1, 2)\nfalse\n\njulia> has_vertex(colors, 1)\ntrue\n\njulia> LightGraphs.SimpleGraphs.fadj(colors, 1) == Int[]\ntrue\n\njulia> LightGraphs.SimpleGraphs.badj(colors, 1) == Int[]\ntrue\n\njulia> colors == colors\ntrue\n\njulia> issubset(colors, colors)\ntrue\n\njulia> SimpleGraph(colors)\n{2, 0} undirected simple Int64 graph\n\nYou can seemlessly make MetaGraphs based on DiGraphs as well.\n\njulia> rock_paper_scissors = MetaGraph(DiGraph(), Label = Symbol, EdgeMeta = Symbol);\n\njulia> rock_paper_scissors[:rock] = nothing; rock_paper_scissors[:paper] = nothing; rock_paper_scissors[:scissors] = nothing;\n\njulia> rock_paper_scissors[:rock, :scissors] = :rock_beats_scissors; rock_paper_scissors[:scissors, :paper] = :scissors_beats_paper; rock_paper_scissors[:paper, :rock] = :paper_beats_rock;\n\njulia> is_directed(rock_paper_scissors)\ntrue\n\njulia> haskey(reverse(rock_paper_scissors), :scissors, :rock)\ntrue\n\njulia> SimpleDiGraph(rock_paper_scissors)\n{3, 3} directed simple Int64 graph\n\njulia> sub_graph, _ = induced_subgraph(rock_paper_scissors, [1, 3]);\n\njulia> haskey(sub_graph, :rock, :scissors)\ntrue\n\njulia> delete!(rock_paper_scissors, :paper);\n\njulia> rock_paper_scissors[:rock, :scissors]\n:rock_beats_scissors\n\n\n\n\n\n","category":"method"},{"location":"#MetaGraphsNext.defaultweight-Tuple{MetaGraph}","page":"MetaGraphsNext.jl","title":"MetaGraphsNext.defaultweight","text":"defaultweight(g)\n\nReturn the default weight for metagraph g.\n\njulia> using MetaGraphsNext\n\njulia> using LightGraphs: Graph\n\njulia> defaultweight(MetaGraph(Graph(), defaultweight = 2))\n2\n\n\n\n\n\n","category":"method"},{"location":"#MetaGraphsNext.weightfunction-Tuple{MetaGraph}","page":"MetaGraphsNext.jl","title":"MetaGraphsNext.weightfunction","text":"weightfunction(g)\n\nReturn the weight function for metagraph g.\n\njulia> using MetaGraphsNext\n\njulia> using LightGraphs: Graph\n\njulia> weightfunction(MetaGraph(Graph(), weightfunction = identity))(0)\n0\n\n\n\n\n\n","category":"method"},{"location":"#MetaGraphsNext.weighttype-Union{Tuple{MetaGraph{#s20,#s21,#s22,#s23,#s24,#s25,#s26,Weight} where #s26 where #s25 where #s24 where #s23 where #s22 where #s21 where #s20}, Tuple{Weight}} where Weight","page":"MetaGraphsNext.jl","title":"MetaGraphsNext.weighttype","text":"weighttype(g)\n\nReturn the weight type for metagraph g.\n\njulia> using MetaGraphsNext\n\njulia> using LightGraphs: Graph\n\njulia> weighttype(MetaGraph(Graph(), defaultweight = 1.0))\nFloat64\n\n\n\n\n\n","category":"method"},{"location":"#LightGraphs.SimpleGraphs.add_edge!-Tuple{MetaGraph,Integer,Integer,Any}","page":"MetaGraphsNext.jl","title":"LightGraphs.SimpleGraphs.add_edge!","text":"add_edge!(g, u, v, val)\n\nAdd an edge (u, v) to MetaGraph g having value val.\n\n\n\n\n\n","category":"method"},{"location":"#LightGraphs.SimpleGraphs.add_vertex!-Tuple{MetaGraph,Any,Any}","page":"MetaGraphsNext.jl","title":"LightGraphs.SimpleGraphs.add_vertex!","text":"add_vertex!(g, label, val)\n\nAdd a vertex to MetaGraph g with label label having value val.\n\nreturn true if the vertex has been added, false otherwise.\n\n\n\n\n\n","category":"method"}]
}
