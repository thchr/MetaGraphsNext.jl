var documenterSearchIndex = {"docs":
[{"location":"api/#API-reference","page":"API reference","title":"API reference","text":"","category":"section"},{"location":"api/#Docstrings","page":"API reference","title":"Docstrings","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"Modules = [MetaGraphsNext]","category":"page"},{"location":"api/#MetaGraphsNext.DOTFormat","page":"API reference","title":"MetaGraphsNext.DOTFormat","text":"struct DOTFormat <: AbstractGraphFormat end\n\nIf all metadata types support pairs or are Nothing, you can save MetaGraphs in DOTFormat.\n\n\n\n\n\n","category":"type"},{"location":"api/#MetaGraphsNext.MGFormat","page":"API reference","title":"MetaGraphsNext.MGFormat","text":"struct MGFormat <: AbstractGraphFormat end\n\nYou can save MetaGraphs in a MGFormat, currently based on JLD2.\n\n\n\n\n\n","category":"type"},{"location":"api/#MetaGraphsNext.MetaDiGraph","page":"API reference","title":"MetaGraphsNext.MetaDiGraph","text":"MetaDiGraph\n\nA MetaGraph whose underlying graph is of type Graphs.SimpleDiGraph.\n\n\n\n\n\n","category":"type"},{"location":"api/#MetaGraphsNext.MetaGraph","page":"API reference","title":"MetaGraphsNext.MetaGraph","text":"MetaGraph{T<:Integer,Label,Graph,VertexData,EdgeData,GraphData,WeightFunction,U<:Real} <: AbstractGraph{T}\n\nA graph type with custom vertex labels containing vertex-, edge- and graph-level metadata.\n\nVertex labels have type Label, while vertex (resp. edge, resp. graph) metadata has type VertexData (resp. EdgeData, resp. GraphData). It is recommended not to set Label to an integer type, so as to avoid confusion between vertex labels and vertex codes (which have type T<:Integer).\n\nFields\n\ng::Graph: underlying, data-less graph with vertex indices of type T\nvertex_labels::Dict{T,Label}: dictionary mapping vertex codes to vertex labels\nvertex_properties::Dict{Label,Tuple{T,VertexData}}: dictionary mapping vertex labels to vertex codes & data\nedge_data::Dict{Tuple{Label,Label},EdgeData}: dictionary mapping edge labels such as (label_u, label_v) to edge metadata\ngraph_data::GraphData: graph metadata\nweight_function::WeightFunction: function defining edge weight from edge metadata\ndefault_weight::U: default weight for the edges\n\n\n\n\n\n","category":"type"},{"location":"api/#MetaGraphsNext.MetaGraph-Union{Tuple{Graphs.AbstractGraph{T}}, Tuple{T}} where T","page":"API reference","title":"MetaGraphsNext.MetaGraph","text":"MetaGraph(\n    g;\n    Label = Symbol,\n    VertexData = Nothing,\n    EdgeData = Nothing,\n    graph_data = nothing,\n    weight_function = edge_data -> 1.0,\n    default_weight = 1.0\n)\n\nConstruct an empty MetaGraph with the given metadata types and weights.\n\n\n\n\n\n","category":"method"},{"location":"api/#MetaGraphsNext.MetaUndirectedGraph","page":"API reference","title":"MetaGraphsNext.MetaUndirectedGraph","text":"MetaUndirectedGraph\n\nA MetaGraph whose underlying graph is of type Graphs.SimpleGraph.\n\n\n\n\n\n","category":"type"},{"location":"api/#Base.delete!-Tuple{MetaGraph, Any, Any}","page":"API reference","title":"Base.delete!","text":"delete!(g, label_1, label_2)\n\nDelete edge (label_1, label_2).\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.delete!-Tuple{MetaGraph, Any}","page":"API reference","title":"Base.delete!","text":"delete!(g, label)\n\nDelete vertex label.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.getindex-Tuple{MetaGraph, Any, Any}","page":"API reference","title":"Base.getindex","text":"getindex(g, label_1, label_2)\n\nReturn edge metadata for the edge between label_1 and label_2.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.getindex-Tuple{MetaGraph, Any}","page":"API reference","title":"Base.getindex","text":"getindex(g, label)\n\nReturn vertex metadata for label.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.getindex-Tuple{MetaGraphsNext.MetaWeights, Integer, Integer}","page":"API reference","title":"Base.getindex","text":"getindex(w::MetaWeights, v1, v2)\n\nGet the weight of edge (v1, v2).\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.getindex-Tuple{MetaGraph}","page":"API reference","title":"Base.getindex","text":"getindex(g)\n\nReturn graph metadata.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.haskey-Tuple{MetaGraph, Any, Any}","page":"API reference","title":"Base.haskey","text":"haskey(g, label_1, label_2)\n\nDetermine whether a graph g contains an edge from label_1 to label_2.\n\nThe order of label_1 and label_2 only matters if g is a digraph.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.haskey-Tuple{MetaGraph, Any}","page":"API reference","title":"Base.haskey","text":"haskey(g, label)\n\nDetermine whether a graph g contains the vertex label.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.setindex!-Tuple{MetaGraph, Any, Any, Any}","page":"API reference","title":"Base.setindex!","text":"setindex!(g, data, label_1, label_2)\n\nSet edge metadata for (label_1, label_2) to data.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.setindex!-Tuple{MetaGraph, Any, Any}","page":"API reference","title":"Base.setindex!","text":"setindex!(g, data, label)\n\nSet vertex metadata for label to data.\n\n\n\n\n\n","category":"method"},{"location":"api/#Graphs.SimpleGraphs.add_edge!-Tuple{MetaGraph, Any, Any, Any}","page":"API reference","title":"Graphs.SimpleGraphs.add_edge!","text":"add_edge!(g, label_1, label_2, data)\n\nAdd an edge (label_1, label_2) to MetaGraph g with metadata data.\n\nReturn true if the edge has been added, false otherwise.\n\n\n\n\n\n","category":"method"},{"location":"api/#Graphs.SimpleGraphs.add_vertex!-Tuple{MetaGraph, Any, Any}","page":"API reference","title":"Graphs.SimpleGraphs.add_vertex!","text":"add_vertex!(g, label, data)\n\nAdd a vertex to MetaGraph g with label label having metadata data.\n\nReturn true if the vertex has been added, false otherwise.\n\n\n\n\n\n","category":"method"},{"location":"api/#Graphs.weights-Tuple{MetaGraph}","page":"API reference","title":"Graphs.weights","text":"weigths(g)\n\nReturn a matrix-like MetaWeights object containing the edge weights for graph g.\n\n\n\n\n\n","category":"method"},{"location":"api/#MetaGraphsNext._copy_props!-Union{Tuple{G}, Tuple{G, G, Any}} where G<:MetaGraph","page":"API reference","title":"MetaGraphsNext._copy_props!","text":"_copy_props!(oldg, newg, vmap)\n\nCopy properties from oldg to newg following vertex map vmap.\n\n\n\n\n\n","category":"method"},{"location":"api/#MetaGraphsNext.arrange","page":"API reference","title":"MetaGraphsNext.arrange","text":"arrange(g, label_1, label_2)\n\nSort two vertex labels in a default order (useful to uniquely express undirected edges).\n\n\n\n\n\n","category":"function"},{"location":"api/#MetaGraphsNext.code_for-Tuple{MetaGraph, Any}","page":"API reference","title":"MetaGraphsNext.code_for","text":"code_for(g::MetaGraph, label)\n\nFind the vertex code (or index) associated with label label.\n\nThis can be useful to pass to methods inherited from Graphs. Note, however, that vertex codes can be reassigned after vertex deletion.\n\n\n\n\n\n","category":"method"},{"location":"api/#MetaGraphsNext.default_weight-Tuple{MetaGraph}","page":"API reference","title":"MetaGraphsNext.default_weight","text":"default_weight(g)\n\nReturn the default weight for metagraph g.\n\n\n\n\n\n","category":"method"},{"location":"api/#MetaGraphsNext.label_for-Tuple{MetaGraph, Integer}","page":"API reference","title":"MetaGraphsNext.label_for","text":"label_for(g::MetaGraph, v)\n\nFind the label associated with code v.\n\nThis can be useful to interpret the results of methods inherited from Graphs. Note, however, that vertex codes can be reassigned after vertex deletion.\n\n\n\n\n\n","category":"method"},{"location":"api/#MetaGraphsNext.set_data!-Tuple{MetaGraph, Any, Any, Any}","page":"API reference","title":"MetaGraphsNext.set_data!","text":"set_data!(g, label_1, label_2, data)\n\nSet edge metadata for (label_1, label_2) to data.\n\nReturn true if the operation succeeds, and false if g has no such edge.\n\n\n\n\n\n","category":"method"},{"location":"api/#MetaGraphsNext.set_data!-Tuple{MetaGraph, Any, Any}","page":"API reference","title":"MetaGraphsNext.set_data!","text":"set_data!(g, label, data)\n\nSet vertex metadata for label to data.\n\nReturn true if the operation succeeds, and false if g has no such vertex.\n\n\n\n\n\n","category":"method"},{"location":"api/#MetaGraphsNext.weight_function-Tuple{MetaGraph}","page":"API reference","title":"MetaGraphsNext.weight_function","text":"weight_function(g)\n\nReturn the weight function for metagraph g.\n\n\n\n\n\n","category":"method"},{"location":"api/#MetaGraphsNext.weighttype-Union{Tuple{MetaGraph{<:Any, <:Any, <:Any, <:Any, <:Any, <:Any, <:Any, Weight}}, Tuple{Weight}} where Weight","page":"API reference","title":"MetaGraphsNext.weighttype","text":"weighttype(g)\n\nReturn the weight type for metagraph g.\n\n\n\n\n\n","category":"method"},{"location":"api/#Index","page":"API reference","title":"Index","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"Modules = [MetaGraphsNext]","category":"page"},{"location":"tutorial_files/#Read-/-write","page":"Reading / writing","title":"Read / write","text":"","category":"section"},{"location":"tutorial_files/","page":"Reading / writing","title":"Reading / writing","text":"julia> using Graphs\n\njulia> using MetaGraphsNext","category":"page"},{"location":"tutorial_files/#DOTFormat","page":"Reading / writing","title":"DOTFormat","text":"","category":"section"},{"location":"tutorial_files/","page":"Reading / writing","title":"Reading / writing","text":"julia> simple = MetaGraph(Graph());\n\njulia> simple[:a] = nothing; simple[:b] = nothing; simple[:a, :b] = nothing;\n\njulia> mktemp() do file, io\n            savegraph(file, simple, DOTFormat())\n            print(read(file, String))\n        end\ngraph T {\n    a\n    b\n    a -- b\n}\n\njulia> complicated = MetaGraph(DiGraph(),\n            VertexData = Dict{Symbol, Int},\n            EdgeData = Dict{Symbol, Int},\n            graph_data = (tagged = true,)\n        );\n\njulia> complicated[:a] = Dict(:code_1 => 1, :code_2 => 2);\n\njulia> complicated[:b] = Dict(:code => 2);\n\njulia> complicated[:a, :b] = Dict(:code => 12);\n\njulia> mktemp() do file, io\n            savegraph(file, complicated, DOTFormat())\n            print(read(file, String))\n        end\ndigraph G {\n    tagged = true\n    a [code_1 = 1, code_2 = 2]\n    b [code = 2]\n    a -> b [code = 12]\n}","category":"page"},{"location":"tutorial_files/#MGFormat","page":"Reading / writing","title":"MGFormat","text":"","category":"section"},{"location":"tutorial_files/","page":"Reading / writing","title":"Reading / writing","text":"julia> example = MetaGraph(Graph());\n\njulia> mktemp() do file, io\n            savegraph(file, example)\n            loadgraph(file, \"something\", MGFormat()) == example\n        end\ntrue","category":"page"},{"location":"tutorial_basics/#Working-with-metagraphs","page":"Basics","title":"Working with metagraphs","text":"","category":"section"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"julia> using Graphs\n\njulia> using MetaGraphsNext","category":"page"},{"location":"tutorial_basics/#Creating-a-MetaGraph","page":"Basics","title":"Creating a MetaGraph","text":"","category":"section"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"We provide a default constructor in which you only need to specify types:","category":"page"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"julia> colors = MetaGraph( Graph(), VertexData = String, EdgeData = Symbol, graph_data = \"graph_of_colors\")\nMeta graph based on a {0, 0} undirected simple Int64 graph with vertex labels of type Symbol, vertex metadata of type String, edge metadata of type Symbol, graph metadata given by \"graph_of_colors\", and default weight 1.0","category":"page"},{"location":"tutorial_basics/#Modifying-the-graph","page":"Basics","title":"Modifying the graph","text":"","category":"section"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"Modifications of graph elements and the associated metadata can always be done using setindex! (as in a dictionary) with the relevant labels.","category":"page"},{"location":"tutorial_basics/#Vertices","page":"Basics","title":"Vertices","text":"","category":"section"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"Use setindex! with one key to add a new vertex with the given label and metadata. If a vertex with the given label does not exist, it will be created automatically. Otherwise, the function will simply modify the metadata for the existing vertex.","category":"page"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"julia> colors[:red] = \"warm\";\n\njulia> colors[:yellow] = \"warm\";\n\njulia> colors[:blue] = \"warm\";  # wrong metadata\n\njulia> colors[:blue] = \"cool\";","category":"page"},{"location":"tutorial_basics/#Edges","page":"Basics","title":"Edges","text":"","category":"section"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"Use setindex! with two keys to add a new edge between the given labels and containing the given metadata. Beware that this time, nonexistent labels will throw an error.","category":"page"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"julia> colors[:red, :yellow] = :orange;\n\njulia> colors[:red, :blue] = :violet;\n\njulia> colors[:yellow, :blue] = :green;","category":"page"},{"location":"tutorial_basics/#Accessing-graph-properties","page":"Basics","title":"Accessing graph properties","text":"","category":"section"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"To retrieve graph properties, we still follow a dictionary-like interface based on labels.","category":"page"},{"location":"tutorial_basics/#Existence","page":"Basics","title":"Existence","text":"","category":"section"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"To check the presence of a vertex or edge, use haskey:","category":"page"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"julia> haskey(colors, :red)\ntrue\n\njulia> haskey(colors, :black)\nfalse\n\njulia> haskey(colors, :red, :yellow) && haskey(colors, :yellow, :red)\ntrue\n\njulia> haskey(colors, :red, :black)\nfalse","category":"page"},{"location":"tutorial_basics/#Metadata","page":"Basics","title":"Metadata","text":"","category":"section"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"All kinds of metadata can be accessed with getindex:","category":"page"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"julia> colors[]\n\"graph_of_colors\"\n\njulia> colors[:blue]\n\"cool\"\n\njulia> colors[:yellow, :blue]\n:green","category":"page"},{"location":"tutorial_basics/#Using-vertex-codes","page":"Basics","title":"Using vertex codes","text":"","category":"section"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"In the absence of removal, vertex codes correspond to order of insertion in the underlying graph:","category":"page"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"julia> code_for(colors, :red)\n1\n\njulia> code_for(colors, :blue)\n3","category":"page"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"You can retrieve the associated labels as follows:","category":"page"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"julia> label_for(colors, 1)\n:red\n\njulia> label_for(colors, 3)\n:blue","category":"page"},{"location":"tutorial_basics/#Adding-weights","page":"Basics","title":"Adding weights","text":"","category":"section"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"The most simple way to add edge weights is to speficy a default weight for all of them.","category":"page"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"julia> weighted_default = MetaGraph(Graph(), default_weight = 2);\n\njulia> default_weight(weighted_default)\n2\n\njulia> weighttype(weighted_default)\nInt64","category":"page"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"You can use the weight_function keyword to specify a function which will transform edge metadata into a weight. This weight must always be the same type as the default_weight.","category":"page"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"julia> weighted = MetaGraph(Graph(), EdgeData = Float64, weight_function = identity);\n\njulia> weighted[:red] = nothing; weighted[:blue] = nothing; weighted[:yellow] = nothing;\n\njulia> weighted[:red, :blue] = 1.0; weighted[:blue, :yellow] = 2.0;\n\njulia> weight_matrix = Graphs.weights(weighted)\nMetaWeights of size (3, 3)\n\njulia> size(weight_matrix)\n(3, 3)\n\njulia> weight_matrix[1, 3]\n1.0\n\njulia> weight_function(weighted)(0)\n0","category":"page"},{"location":"tutorial_basics/","page":"Basics","title":"Basics","text":"You can then use all functions from Graphs.jl that require weighted graphs (see the rest of the tutorial).","category":"page"},{"location":"tutorial_graphs/#Graphs.jl-interface","page":"Graphs.jl interface","title":"Graphs.jl  interface","text":"","category":"section"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"julia> using Graphs\n\njulia> using MetaGraphsNext","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"MetaGraphs inherit many methods from Graphs.jl. In general, inherited methods refer to vertices by codes, not labels, for compatibility with the AbstractGraph interface.","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"Note that vertex codes get reassigned after rem_vertex! operations to remain contiguous, so we recommend systematically converting to and from labels.","category":"page"},{"location":"tutorial_graphs/#Undirected-graphs","page":"Graphs.jl interface","title":"Undirected graphs","text":"","category":"section"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"We can make MetaGraphs based on (undirected) Graphs.","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"julia> cities = MetaGraph(Graph(), VertexData = String, EdgeData = Int, weight_function = identity, default_weight = 0);","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"Let us add some cities and the distance between them:","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"julia> cities[:Paris] = \"France\";\n\njulia> cities[:London] = \"UK\";\n\njulia> cities[:Berlin] = \"Germany\";\n\njulia> cities[:Paris, :London] = 344;\n\njulia> cities[:Paris, :Berlin] = 878;","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"The general properties of the graph are as expected:","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"julia> is_directed(cities)\nfalse\n\njulia> eltype(cities)\nInt64\n\njulia> edgetype(cities)\nGraphs.SimpleGraphs.SimpleEdge{Int64}\n\njulia> SimpleGraph(cities)\n{3, 2} undirected simple Int64 graph","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"We can check the set of vertices:","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"julia> nv(cities)\n3\n\njulia> Tuple(collect(vertices(cities)))\n(1, 2, 3)\n\njulia> has_vertex(cities, 2)\ntrue\n\njulia> has_vertex(cities, 4)\nfalse","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"We then check the set of edges:","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"julia> ne(cities)\n2\n\njulia> Tuple(collect(edges(cities)))\n(Edge 1 => 2, Edge 1 => 3)\n\njulia> has_edge(cities, 1, 2)\ntrue\n\njulia> has_edge(cities, 2, 3)\nfalse","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"From this initial graph, we can create some others:","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"julia> copy(cities) == cities\ntrue\n\njulia> zero(cities) == cities\nfalse\n\njulia> nv(zero(cities))\n0","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"Since cities is a weighted graph, we can leverage the whole Graphs.jl machinery of graph analysis and traversal:","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"julia> diameter(cities)\n1222\n\njulia> ds = dijkstra_shortest_paths(cities, 2); Tuple(ds.dists)\n(344, 0, 1222)","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"Finally, let us remove some edges and vertices","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"julia> rem_edge!(cities, 1, 3)\ntrue\n\njulia> rem_vertex!(cities, 3)\ntrue\n\njulia> rem_vertex!(cities, 3)\nfalse\n\njulia> has_vertex(cities, 1)\ntrue\n\njulia> has_vertex(cities, 3)\nfalse","category":"page"},{"location":"tutorial_graphs/#Directed-graphs","page":"Graphs.jl interface","title":"Directed graphs","text":"","category":"section"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"We can make MetaGraphs based on DiGraphs as well.","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"julia> rock_paper_scissors = MetaGraph(DiGraph(), Label = Symbol, EdgeData = Symbol);\n\njulia> for label in [:rock, :paper, :scissors]; rock_paper_scissors[label] = nothing; end;\n\njulia> rock_paper_scissors[:rock, :scissors] = :rock_beats_scissors; rock_paper_scissors[:scissors, :paper] = :scissors_beat_paper; rock_paper_scissors[:paper, :rock] = :paper_beats_rock;","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"We see that the underlying graph has changed:","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"julia> is_directed(rock_paper_scissors)\ntrue\n\njulia> SimpleDiGraph(rock_paper_scissors)\n{3, 3} directed simple Int64 graph","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"Directed graphs can be reversed:","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"julia> haskey(rock_paper_scissors, :scissors, :rock)\nfalse\n\njulia> haskey(reverse(rock_paper_scissors), :scissors, :rock)\ntrue","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"Finally, let us take a subgraph:","category":"page"},{"location":"tutorial_graphs/","page":"Graphs.jl interface","title":"Graphs.jl interface","text":"julia> rock_paper, _ = induced_subgraph(rock_paper_scissors, [1, 2]);\n\njulia> issubset(rock_paper, rock_paper_scissors)\ntrue\n\njulia> haskey(rock_paper, :paper, :rock)\ntrue\n\njulia> haskey(rock_paper, :rock, :scissors)\nfalse","category":"page"},{"location":"#MetaGraphsNext.jl","page":"Home","title":"MetaGraphsNext.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Welcome to MetaGraphsNext.jl, an experimental, type-stable replacement for MetaGraphs.","category":"page"},{"location":"#Getting-started","page":"Home","title":"Getting started","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To install the package, open the Julia REPL and type","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using Pkg; Pkg.add(\"MetaGraphsNext\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"The tutorial provides an overview of the functionalities. We first explain the basics of the MetaGraph structure, before moving on to its integration with Graphs.jl.","category":"page"}]
}
